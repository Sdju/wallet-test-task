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
};
</script>

<style lang="scss">
.app {
  display: grid;
  grid-template-areas:
    "header"
    "body";
  height: 100vh;
  font-size: 18px;

  &__header {
    grid-area: header;
  }

  &__body {
    grid-area: body;
  }
}
</style>
