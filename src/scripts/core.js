/**
 * Ядро приложения с поддержкой системы плагинов
 * */
export default class Core {
  constructor() {
    this.plugins = {};
  }

  use(plugin) {
    if (plugin.name in this.plugins) {
      const existedPlugin = this.plugins[plugin.name];
      if (plugin.version !== existedPlugin) {
        throw new Error(`PluginSystem[PLUGIN_VERSION_COLLISION]: "${plugin.name}" plugin [${plugin.version}] and [${existedPlugin.version}]`);
      }
      return;
    }

    this.plugins[plugin.name] = plugin;
  }

  vueInstall(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$core = this;

    Object.values(this.plugins).forEach((plugin) => {
      plugin.vueInstall?.(Vue);
    });
  }

  init() {
    Object.values(this.plugins).forEach((plugin) => {
      plugin.init?.();
    });
  }

  get vuePlugin() {
    return {
      install: this.vueInstall.bind(this),
    };
  }

  /**
   * Возвращаем уникальный экземпляр едра для страницы
   * */
  static get instance() {
    if (window.$WALLET_CORE) {
      return window.$WALLET_CORE;
    }

    const core = new Core();
    window.$WALLET_CORE = core;

    return core;
  }
}
