<template>
  <div class="order-book">
    <div class="order-book__bid">
      <CustomScrollbar class="order-book__scroll">
        <OrderBookTable class="order-book__table" :data="bids" />
      </CustomScrollbar>
    </div>
    <div class="order-book__ask">
      <CustomScrollbar class="order-book__scroll">
        <OrderBookTable class="order-book__table" :data="asks" />
      </CustomScrollbar>
    </div>
  </div>
</template>

<script>
import PluginsNames from '@/consts/plugins-names';
import vueCustomScrollbar from 'vue-custom-scrollbar';
import 'vue-custom-scrollbar/dist/vueScrollbar.css';
import OrderBookTable from '@/components/OrderBookTable.vue';

export default {
  components: {
    OrderBookTable,
    CustomScrollbar: vueCustomScrollbar,
  },

  data() {
    return {
      asks: [],
      bids: [],
    };
  },

  created() {
    const {
      [PluginsNames.TRADE_API]: TradeApiEvents,
    } = this.$eventBus.Events;
    this.$eventBus.$emit(TradeApiEvents.SUBSCRIBE);
    this.$eventBus.$on(TradeApiEvents.SYMBOL_CHANGED, this.symbolChanged);
    this.$eventBus.$on(TradeApiEvents.SET_DATA, this.setData);
    this.$eventBus.$on(TradeApiEvents.CHANGE_DATA, this.updateData);
  },

  beforeDestroy() {
    const {
      [PluginsNames.TRADE_API]: TradeApiEvents,
    } = this.$eventBus.Events;
    this.$eventBus.$emit(TradeApiEvents.UNSUBSCRIBE);
    this.$eventBus.$off(TradeApiEvents.SYMBOL_CHANGED, this.symbolChanged);
    this.$eventBus.$off(TradeApiEvents.SET_DATA, this.setData);
    this.$eventBus.$off(TradeApiEvents.CHANGE_DATA, this.updateData);
  },

  methods: {
    setData({ asks, bids }) {
      this.asks = asks;
      this.bids = bids;
    },

    updateData({ asks, bids }) {
      const tradePlugin = this.$core.plugins[PluginsNames.TRADE_API];
      this.asks = tradePlugin.applyDiffToData(asks, this.asks, true);
      this.bids = tradePlugin.applyDiffToData(bids, this.bids, false);
    },

    symbolChanged() {
      const {
        [PluginsNames.TRADE_API]: TradeApiEvents,
      } = this.$eventBus.Events;
      this.$eventBus.$emit(TradeApiEvents.UNSUBSCRIBE);
      this.$eventBus.$emit(TradeApiEvents.SUBSCRIBE);
    },
  },
};
</script>

<style lang="scss" scoped>
.order-book {
  display: grid;
  grid-template-areas:
    "bid"
    "ask";
  grid-template-rows: 1fr 1fr;

  @media all and (min-width: 1023px) {
    grid-template-areas: "bid ask";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  &__scroll {
    height: 100%;
  }

  &__bid {
    grid-area: bid;
    background-color: #c7f8bb;
    height: 100%;
    overflow: hidden;

    @media all and (min-width: 1023px) {
      border-right: 1px solid black;
    }
  }

  &__ask {
    grid-area: ask;
    background-color: #F8BBD0;
    height: 100%;
    overflow: hidden;
  }

  &__table {
    width: 100%;
  }
}
</style>
