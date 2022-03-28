import Plugin from '@/scripts/plugin';
import PluginsNames from '@/consts/plugins-names';
import BinanceApi from '@/scripts/binance-api';

export default class TradeApi extends Plugin {
  constructor() {
    super({
      name: PluginsNames.TRADE_API,
      version: '1.0.0',
    });
    this.$eventBus = null;
    this.symbol = 'BTCUSDT';
    this.SupportSymbols = ['BTCUSDT', 'BNBBTC', 'ETHBTC'];
    this.DiffTypes = TradeApi.DiffTypes;
  }

  init() {
    const eventBusPlugin = this.getPlugin(PluginsNames.EVENT_BUS);
    this.$eventBus = eventBusPlugin.emitter;
    this.$eventBus.Events[PluginsNames.TRADE_API] = TradeApi.Events;

    this.$eventBus.$on(TradeApi.Events.SUBSCRIBE, this.subscribe.bind(this));
    this.$eventBus.$on(TradeApi.Events.CHANGE_SYMBOL, this.changeSymbol.bind(this));
  }

  async subscribe() {
    let data = null;
    let lastUpdateId = null;

    const close = await BinanceApi.subscribeBySymbol(this.symbol, async (diff) => {
      if (!data) {
        data = await BinanceApi.getBySymbol(this.symbol);
        lastUpdateId = data.lastUpdateId;
        this.$eventBus.$emit(TradeApi.Events.SET_DATA, data);
      }

      if (diff.u <= lastUpdateId) {
        return;
      }

      this.$eventBus.$emit(TradeApi.Events.CHANGE_DATA, {
        asks: diff.a,
        bids: diff.b,
      });
    });
    const unsubscribe = () => {
      close();
      this.$eventBus.$off(TradeApi.Events.UNSUBSCRIBE, unsubscribe);
    };
    this.$eventBus.$on(TradeApi.Events.UNSUBSCRIBE, unsubscribe);
  }

  async changeSymbol(symbol) {
    this.symbol = symbol;
    this.$eventBus.$emit(TradeApi.Events.SYMBOL_CHANGED);
  }

  /**
   * Пишем "оптимальный" алгоритм для мержа разницы
   * Eсть идеи по улучшениям, но уже и так много времени на него ушло
   * */
  // eslint-disable-next-line class-methods-use-this
  applyDiffToData(diff, dataTable, reversed) {
    let diffIndex = 0;
    let tableIndex = 0;
    const newTable = [];
    const logName = reversed ? 'ask' : 'bid';

    // фильтр применяемый в случае завершения прошлого стакана раньше окончания списка изменений
    const finalFilter = () => {
      if (newTable.length >= 500) {
        return;
      }
      const availableCount = 500 - newTable.length;

      const newPositions = diff
        .slice(diffIndex)
        .filter(([, amount]) => Number(amount) !== 0)
        .slice(0, availableCount);
      newPositions.forEach((position) => {
        this.$eventBus.$emit(TradeApi.Events.DIFF_LOG, {
          type: TradeApi.DiffTypes.NEW,
          name: logName,
          price: position[0],
          amount: position[1],
        });
      });
      newTable.push(...newPositions);
    };

    while (diffIndex !== diff.length) {
      const diffValue = diff[diffIndex];
      const tableValue = dataTable[tableIndex];
      const [
        diffPrice,
        diffAmount,
      ] = diffValue;

      // равное значение удаление/изменение
      if (diffPrice === tableValue[0]) {
        if (Number(diffAmount) !== 0) {
          newTable.push(diffValue);

          this.$eventBus.$emit(TradeApi.Events.DIFF_LOG, {
            type: TradeApi.DiffTypes.CHANGE,
            name: logName,
            price: diffPrice,
            old: tableValue[1],
            actual: diffAmount,
          });
        } else {
          this.$eventBus.$emit(TradeApi.Events.DIFF_LOG, {
            type: TradeApi.DiffTypes.DELETE,
            name: logName,
            price: diffPrice,
          });
        }

        tableIndex += 1;
        if (tableIndex === dataTable.length) {
          // итоговый фикс
          diffIndex += 1;
          finalFilter();
          break;
        }
      } else if ((diffPrice < tableValue[0]) !== reversed) {
        newTable.push(tableValue);
        tableIndex += 1;
        if (tableIndex === dataTable.length) {
          finalFilter();
          break;
        }
        // eslint-disable-next-line no-continue
        continue;
      } else if (Number(diffAmount) !== 0) {
        newTable.push(diffValue);
        this.$eventBus.$emit(TradeApi.Events.DIFF_LOG, {
          type: TradeApi.DiffTypes.NEW,
          name: logName,
          price: diffPrice,
          amount: diffAmount,
        });
      }

      diffIndex += 1;
    }

    if (tableIndex !== dataTable.length) {
      // докидываем остатки
      newTable.push(...dataTable.slice(tableIndex));
    }

    /**
     * Детекция ошибки изнутри
     */
    const result = newTable.slice(0, 500);
    const error = result.findIndex(([price], index) => price === result[index - 1]?.[0]);
    if (error >= 0) {
      console.log([
        diff,
        dataTable,
        reversed,
        error,
        [result[error - 1], result[error]],
      ]);
    }

    return result;
  }

  static DiffTypes = {
    CHANGE: 'change',
    DELETE: 'delete',
    NEW: 'new',
  }

  static Events = {
    SUBSCRIBE: 'trade-api:subscribe',
    UNSUBSCRIBE: 'trade-api:unsubscribe',
    SET_DATA: 'trade-api:set-data',
    CHANGE_DATA: 'trade-api:change-data',
    SYMBOL_CHANGED: 'trade-api:symbol-changed',
    DIFF_LOG: 'trade-api:diff-log',
    CHANGE_SYMBOL: 'trade-api:change-symbol',
  }
}
