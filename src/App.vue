<template>
  <div class="app">
    <TheHeader class="app__header" />
    <router-view class="app__body"/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: { TheHeader },

  created() {
    this.$core.init();
  },
};
</script>

<style lang="scss">
.app {
  display: grid;
  grid-template-areas:
    "header"
    "body";
  grid-template-rows: min-content auto;
  height: 100vh;
  font-size: 18px;

  &__header {
    grid-area: header;
  }

  &__body {
    grid-area: body;
    overflow: hidden;
  }
}
</style>
