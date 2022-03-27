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
  }

  init() {
    const eventBusPlugin = this.getPlugin(PluginsNames.EVENT_BUS);
    this.$eventBus = eventBusPlugin.emitter;
    this.$eventBus.Events[PluginsNames.TRADE_API] = TradeApi.Events;

    this.$eventBus.$on(TradeApi.Events.SUBSCRIBE, this.subscribe.bind(this));
  }

  async subscribe() {
    let data = null;
    let lastUpdateId = null;

    /**
     * Пишем оптимальный алгоритм для мержа разницы
     * */
    const applyChange = (diff, dataTable) => {
      let diffIndex = 0;
      let tableIndex = 0;
      const newTable = [];

      while (diffIndex !== diff.length) {
        const diffValue = diff[diffIndex];
        const tableValue = dataTable[tableIndex];
        if (diffValue[0] === tableValue[0]) {
          if (Number(diffValue[1]) !== 0) {
            newTable.push(diffValue);
          }
          tableIndex += 1;
          if (tableIndex === dataTable.length) {
            newTable.push(...diff.slice(diffIndex).filter(([, amount]) => Number(amount) !== 0));
            break;
          }
        } else if (diffValue[0] < tableValue[0]) {
          newTable.push(tableValue);
          tableIndex += 1;
          if (tableIndex === dataTable.length) {
            newTable.push(...diff.slice(diffIndex).filter(([, amount]) => Number(amount) !== 0));
            break;
          }
          // eslint-disable-next-line no-continue
          continue;
        } else if (Number(diffValue[1]) !== 0) {
          newTable.push(diffValue);
        }

        diffIndex += 1;
      }
      return newTable.slice(0, 500);
    };

    await BinanceApi.subscribeBySymbol('BTCUSDT', async (diff) => {
      if (!data) {
        data = await BinanceApi.getBySymbol();
        lastUpdateId = data.lastUpdateId;
        this.$eventBus.$emit(TradeApi.Events.SET_DATA, data);
      }

      if (diff.u <= lastUpdateId) {
        return;
      }

      data.bids = applyChange(diff.b, data.bids);
      data.asks = applyChange(diff.a, data.asks);
      this.$eventBus.$emit(TradeApi.Events.SET_DATA, data);
    });
  }

  static Events = {
    SUBSCRIBE: 'trade-api:subscribe',
    SET_DATA: 'trade-api:set-data',
  }
}
