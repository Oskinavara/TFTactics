<template>
  <header class="the-header">
    <div class="the-header__inner">
      <nuxt-link to="/">
        <img src="~/assets/icons/logo.svg" alt="main logo" class="the-header__logo" />
      </nuxt-link>
      <nav-bar />
    </div>
  </header>
</template>

<script>
import NavBar from '@/components/molecules/Header/NavBar.vue'
export default {
  name: 'Header',

  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.the-header {
  background-color: $dark-gray;
  padding: 0 1.8rem;
  border-bottom: 1px solid $border-color;
  height: 6rem;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
  }

  &__logo {
    height: 2.6rem;
  }
}
</style>