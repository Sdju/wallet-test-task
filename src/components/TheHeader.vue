<template>
  <div class="header">
    <router-link class="header__link" to="/">
      Биржевой стакан
    </router-link>
    <router-link class="header__link" to="/diff-viewer/">
      Отслеживание изменений
    </router-link>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background-color: #0288D1;
  box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
  padding: 12px;
  height: fit-content;

  &__link {
    color: #FFF;
    text-decoration: none;
    margin-right: 12px;

    ::v-deep &.router-link-exact-active {
      color: #DDD;
      cursor: default;
    }
  }
}
</style>
