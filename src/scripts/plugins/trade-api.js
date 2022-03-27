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

  async subscribe({ symbol }) {
    let data = null;
    let lastUpdateId = null;

    const close = await BinanceApi.subscribeBySymbol(symbol, async (diff) => {
      if (!data) {
        data = await BinanceApi.getBySymbol(symbol);
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
    this.$eventBus.$on(TradeApi.Events.UNSUBSCRIBE, close);
  }

  static Events = {
    SUBSCRIBE: 'trade-api:subscribe',
    UNSUBSCRIBE: 'trade-api:unsubscribe',
    SET_DATA: 'trade-api:set-data',
    CHANGE_DATA: 'trade-api:change-data',
  }
}
