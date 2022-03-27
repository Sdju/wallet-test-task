import Plugin from '@/scripts/plugin';
import PluginsNames from '@/consts/plugins-names';

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
  }

  static Events = {
    UPDATE: 'update',
  }
}
