<template>
  <div class="order-book-page">
    <div class="order-book-page__bid">
      <CustomScrollbar>
        <table class="order-book-page__table">
          <thead>
          <tr>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="line in bids" :key="`${line[0]}/${line[1]}`">
            <td>{{ line[0] }}</td>
            <td>{{ line[1] }}</td>
            <td>{{ line[0] * line[1] }}</td>
          </tr>
          </tbody>
        </table>
      </CustomScrollbar>
    </div>
    <div class="order-book-page__ask">
      <CustomScrollbar>
        <table class="order-book-page__table">
          <thead>
          <tr>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="line in asks" :key="`${line[0]}/${line[1]}`">
            <td>{{ line[0] }}</td>
            <td>{{ line[1] }}</td>
            <td>{{ line[0] * line[1] }}</td>
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
    };
  },

  created() {
    const {
      [PluginsNames.TRADE_API]: TradeApiEvents,
    } = this.$eventBus.Events;
    this.$eventBus.$emit(TradeApiEvents.SUBSCRIBE);
    this.$eventBus.$on(TradeApiEvents.SET_DATA, ({ asks, bids }) => {
      this.asks = asks;
      this.bids = bids;
    });
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
      width: 33.33333%;
    }
  }
}
</style>
