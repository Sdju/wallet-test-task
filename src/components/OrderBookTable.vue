<template>
  <table class="order-book-table">
    <thead>
    <tr>
      <th>Price</th>
      <th>Amount</th>
      <th v-if="!isMobile">Total</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="line in rows" :key="`${line.price}`">
      <td>{{ line.price }}</td>
      <td>{{ line.amount }}</td>
      <td v-if="!isMobile">{{ line.total }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      isMobile: false,
    };
  },

  computed: {
    rows() {
      return this.data.map(([price, amount]) => ({
        price,
        amount,
        total: price * amount,
      }));
    },
  },

  beforeMount() {
    this.isMobile = window.innerWidth < 800;
    window.addEventListener('resize', this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style lang="scss" scoped>
.order-book-table {
  border-collapse: collapse;

  th, td {
    border: 1px solid #555;
    width: 50%;

    @media all and (min-width: 800px) {
      width: 33.33333%;
    }
  }
}
</style>
