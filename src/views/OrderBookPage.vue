<template>
  <div class="order-book-page">
    <div class="order-book-page__bid">
      <CustomScrollbar class="order-book-page__scroll">
        <table class="order-book-page__table">
          <thead>
          <tr>
            <th>Price</th>
            <th>Amount</th>
            <th v-if="!isMobile">Total</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="line in bids" :key="`${line.id}`">
            <td>{{ line.price }}</td>
            <td>{{ line.amount }}</td>
            <td v-if="!isMobile">{{ line.total }}</td>
          </tr>
          </tbody>
        </table>
      </CustomScrollbar>
    </div>
    <div class="order-book-page__ask">
      <CustomScrollbar class="order-book-page__scroll">
        <table class="order-book-page__table">
          <thead>
          <tr>
            <th>Price</th>
            <th>Amount</th>
            <th v-if="!isMobile">Total</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="line in bids" :key="`${line.id}`">
            <td>{{ line.price }}</td>
            <td>{{ line.amount }}</td>
            <td v-if="!isMobile">{{ line.total }}</td>
          </tr>
          </tbody>
        </table>
      </CustomScrollbar>
    </div>
  </div>
</template>
<script>
import PluginsNames from '@/consts/plugins-names';
import vueCustomScrollbar from 'vue-custom-scrollbar';
import 'vue-custom-scrollbar/dist/vueScrollbar.css';

export default {
  components: {
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
    this.$eventBus.$emit(TradeApiEvents.SUBSCRIBE);
    this.$eventBus.$on(TradeApiEvents.SET_DATA, this.setData);
  },

  beforeMount() {
    this.isMobile = window.innerWidth < 800;
    window.addEventListener('resize', this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);

    const {
      [PluginsNames.TRADE_API]: TradeApiEvents,
    } = this.$eventBus.Events;
    this.$eventBus.$emit(TradeApiEvents.UNSUBSCRIBE);
    this.$eventBus.$off(TradeApiEvents.TradeApiEvents.SET_DATA);
  },

  methods: {
    setData({ asks, bids }) {
      this.asks = asks.map(([price, amount]) => ({
        price,
        amount,
        total: price * amount,
        id: `${price}/${amount}`,
      }));
      this.bids = bids.map(([price, amount]) => ({
        price,
        amount,
        total: price * amount,
        id: `${price}/${amount}`,
      }));
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
    border-collapse: collapse;

    th, td {
      border: 1px solid #555;
      width: 50%;

      @media all and (min-width: 800px) {
        width: 33.33333%;
      }
    }
  }
}
</style>
