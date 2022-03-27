<template>
  <div class="order-book-page">
    <div class="order-book-page__bid">
      <CustomScrollbar class="order-book-page__scroll">
        <OrderBookTable class="order-book-page__table" :data="asks" />
      </CustomScrollbar>
    </div>
    <div class="order-book-page__ask">
      <CustomScrollbar class="order-book-page__scroll">
        <OrderBookTable class="order-book-page__table" :data="bids" />
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
      isMobile: false,
    };
  },

  created() {
    const {
      [PluginsNames.TRADE_API]: TradeApiEvents,
    } = this.$eventBus.Events;
    this.$eventBus.$emit(TradeApiEvents.SUBSCRIBE, {
      symbol: 'BTCUSDT',
    });
    this.$eventBus.$on(TradeApiEvents.SET_DATA, this.setData);
    this.$eventBus.$on(TradeApiEvents.CHANGE_DATA, this.updateData);
  },

  beforeDestroy() {
    const {
      [PluginsNames.TRADE_API]: TradeApiEvents,
    } = this.$eventBus.Events;
    this.$eventBus.$emit(TradeApiEvents.UNSUBSCRIBE);
    this.$eventBus.$off(TradeApiEvents.SET_DATA, this.setData);
    this.$eventBus.$off(TradeApiEvents.CHANGE_DATA, this.updateData);
  },

  methods: {
    setData({ asks, bids }) {
      this.asks = asks;
      this.bids = bids;
    },

    updateData({ asks, bids }) {
      this.asks = this.applyChange(asks, this.asks, true);
      this.bids = this.applyChange(bids, this.bids, false);
    },

    /**
     * Пишем "оптимальный" алгоритм для мержа разницы
     * Eсть идеи по улучшениям, но уже и так много времени на него ушло
     * */
    applyChange(diff, dataTable, reversed) {
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
        } else if ((diffValue[0] < tableValue[0]) !== reversed) {
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
    },

    onResize() {
      this.isMobile = window.innerWidth < 800;
    },
  },
};
</script>
<style lang="scss" scoped>
.order-book-page {
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
