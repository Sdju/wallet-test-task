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
    const subscribe = await BinanceApi.getBySymbol();
    this.$eventBus.$emit(TradeApi.Events.SET_DATA, subscribe);
  }

  static Events = {
    SUBSCRIBE: 'trade-api:subscribe',
    SET_DATA: 'trade-api:set-data',
  }
}
