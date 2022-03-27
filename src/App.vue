<template>
  <div class="app">
    <TheHeader class="app__header" />
    <router-view/>
  </div>
</template>

<style>
.app {
  display: grid;
}
</style>
<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: { TheHeader },
};
</script>
