<template>
  <div class="order-book-page">
    <OrderBook class="order-book-page__book"/>
  </div>
</template>
<script>
import OrderBook from '@/components/OrderBook.vue';

export default {
  components: {
    OrderBook,
  },
};
</script>
<style lang="scss" scoped>
.order-book-page {

  &__book {
    height: 100%;
  }
}
</style>
