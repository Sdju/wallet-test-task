import Plugin from '@/scripts/plugin';
import Vue from 'vue';
import PluginsNames from '@/consts/plugins-names';

export default class EventBus extends Plugin {
  constructor() {
    super({
      name: PluginsNames.EVENT_BUS,
      version: '1.0.0',
    });

    this.emitter = new Vue();
    // создаем пулл возможных ивентов
    this.emitter.Events = {};
  }

  vueInstall(vue) {
    // написание эмиттера нетривиально, берем наипростейший кейс с использованием Vue

    // eslint-disable-next-line no-param-reassign
    vue.prototype.$eventBus = this.emitter;
  }
}
