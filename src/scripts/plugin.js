export default class Plugin {
  constructor(info) {
    this.core = null;
    this.name = info.name;
    this.version = info.version;
  }

  install(core) {
    this.core = core;
  }

  getPlugin(name) {
    const plugin = this.core?.plugins[name];
    if (!plugin) {
      throw new Error(`PluginSystem[PLUGIN_ACCESS_ERROR]: "${this.name}" trying to access to unavailable plugin "${name}"`);
    }

    return plugin;
  }
}
