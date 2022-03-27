<template>
  <div class="diff-viewer-page">
    <div class="diff-viewer-page__select-panel">
      <CustomSelect class="diff-viewer-page__select"
                    :clearable="false"
                    :searchable="false"
                    :value="symbol"
                    :options="symbols"
                    @input="changeSymbol"/>
    </div>
    <div class="diff-viewer-page__diff-log">
      <CustomScrollbar class="diff-viewer-page__scroll">
        <div>
          <div v-for="row in logs"
               :key="row.id"
               class="diff-viewer-page__row">
            {{ row.log }}
          </div>
        </div>
      </CustomScrollbar>
    </div>
  </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';
import CustomSelect from 'vue-select';
import PluginsNames from '@/consts/plugins-names';
import vueCustomScrollbar from 'vue-custom-scrollbar';
import 'vue-custom-scrollbar/dist/vueScrollbar.css';

export default {
  components: {
    CustomSelect,
    CustomScrollbar: vueCustomScrollbar,
  },

  data() {
    return {
      asks: [],
      bids: [],
      logs: [],
      symbol: null,
      symbols: [],
      id: 0,
      logFlushTimer: null,
      logBuffer: [],
    };
  },

  created() {
    const {
      [PluginsNames.TRADE_API]: TradeApiEvents,
    } = this.$eventBus.Events;
    const tradePlugin = this.$core.plugins[PluginsNames.TRADE_API];
    this.symbol = tradePlugin.symbol;
    this.symbols = tradePlugin.SupportSymbols;
    this.$eventBus.$emit(TradeApiEvents.SUBSCRIBE);
    this.addLog('Соединение с биржей');
    this.$eventBus.$on(TradeApiEvents.SYMBOL_CHANGED, this.symbolChanged);
    this.$eventBus.$on(TradeApiEvents.SET_DATA, this.setData);
    this.$eventBus.$on(TradeApiEvents.CHANGE_DATA, this.updateData);
    this.$eventBus.$on(TradeApiEvents.DIFF_LOG, this.difLogging);
  },

  beforeDestroy() {
    const {
      [PluginsNames.TRADE_API]: TradeApiEvents,
    } = this.$eventBus.Events;
    this.$eventBus.$emit(TradeApiEvents.UNSUBSCRIBE);
    this.$eventBus.$off(TradeApiEvents.SYMBOL_CHANGED, this.symbolChanged);
    this.$eventBus.$off(TradeApiEvents.SET_DATA, this.setData);
    this.$eventBus.$off(TradeApiEvents.CHANGE_DATA, this.updateData);
    this.$eventBus.$on(TradeApiEvents.DIFF_LOG, this.difLogging);
    if (this.logFlushTimer) {
      clearTimeout(this.logFlushTimer);
    }
  },

  methods: {
    setData({ asks, bids }) {
      this.asks = asks;
      this.bids = bids;
      this.addLog('Получены начальные данные');
    },

    updateData({ asks, bids }) {
      const tradePlugin = this.$core.plugins[PluginsNames.TRADE_API];
      this.asks = tradePlugin.applyDiffToData(asks, this.asks, true);
      this.bids = tradePlugin.applyDiffToData(bids, this.bids, false);
    },

    symbolChanged() {
      const tradePlugin = this.$core.plugins[PluginsNames.TRADE_API];
      if (this.logFlushTimer) {
        clearTimeout(this.logFlushTimer);
        this.logFlushTimer = null;
      }
      const {
        [PluginsNames.TRADE_API]: TradeApiEvents,
      } = this.$eventBus.Events;
      this.symbol = tradePlugin.symbol;
      this.$eventBus.$emit(TradeApiEvents.UNSUBSCRIBE);
      setTimeout(() => {
        this.addLog('Соединение с биржей');
        this.$eventBus.$emit(TradeApiEvents.SUBSCRIBE);
      }, 100);
    },

    changeSymbol(symbol) {
      const {
        [PluginsNames.TRADE_API]: TradeApiEvents,
      } = this.$eventBus.Events;
      this.logs = [];
      this.logBuffer = [];
      this.$eventBus.$emit(TradeApiEvents.CHANGE_SYMBOL, symbol);
    },

    difLogging(log) {
      const tradePlugin = this.$core.plugins[PluginsNames.TRADE_API];
      // eslint-disable-next-line default-case
      switch (log.type) {
        case tradePlugin.DiffTypes.CHANGE:
          this.addLog(`[${log.name} ${log.price}] был изменен с ${log.old} на ${log.actual}`);
          break;
        case tradePlugin.DiffTypes.DELETE:
          this.addLog(`[${log.name} ${log.price}] был удален`);
          break;
        case tradePlugin.DiffTypes.NEW:
          this.addLog(`[${log.name} ${log.price}] ${log.amount} был добавлен`);
          break;
      }
    },

    addLog(string) {
      if (!this.logFlushTimer) {
        this.logFlushTimer = setTimeout(() => {
          this.logFlushTimer = null;
          this.logs = [...this.logBuffer, ...this.logs].slice(0, 1000);
          this.logBuffer = [];
        }, 500);
      }

      this.logBuffer.unshift({
        log: string,
        id: this.id,
      });
      this.id += 1;
    },
  },
};
</script>
<style lang="scss" scoped>
.diff-viewer-page {
  display: grid;
  grid-template-areas:
    "select"
    "logs";
  grid-template-rows: min-content 1fr;

  &__select-panel {
    grid-area: select;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__select {
    width: 300px;
  }

  &__diff-log {
    height: 100%;
    overflow: hidden;
  }

  &__scroll {
    height: 100%;
  }

  &__row {
    padding: 8px 8px 0 8px;

    @media all and (min-width: 1023px) {
      padding: 12px 12px 0 12px;
    }
  }
}
</style>
