<template>
  <header class="the-header">
    <div class="the-header__inner">
      <nuxt-link to="/">
        <img src="~/assets/icons/logo.svg" alt="main logo" class="the-header__logo" />
      </nuxt-link>
      <nav-bar />
      <hamburger-icon />
    </div>
  </header>
</template>

<script>
import NavBar from '@/components/molecules/Header/NavBar.vue'
import HamburgerIcon from '@/components/atoms/HamburgerIcon.vue'
export default {
  name: 'Header',

  components: {
    NavBar,
    HamburgerIcon
  }
}
</script>

<style lang="scss" scoped>
.the-header {
  background-color: $dark-gray;
  padding: 0 1.8rem;
  border-bottom: 1px solid $border-color;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    height: 4.9rem;
  }

  &__logo {
    height: 2.4rem;
  }
}
</style>