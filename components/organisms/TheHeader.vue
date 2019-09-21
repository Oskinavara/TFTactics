<template>
  <header class="the-header">
    <div class="the-header__inner">
      <img src="~/assets/icons/logo.svg" alt="main logo" class="the-header__logo" />
      <nav-bar />
    </div>
  </header>
</template>

<script>
import NavBar from '@/components/molecules/Header/NavBar.vue'
import ChampionIcon from '@/components/atoms/ChampionIcon.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'
export default {
  components: {
    NavBar,
    ChampionIcon,
    SearchBar
  }
}
</script>

<style lang="scss" scoped>
.the-header {
  background-color: $dark-gray;
  padding: 1.7rem 1.8rem;
  border-bottom: 1px solid $border-color;
  &__inner {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
  }
  &__logo {
    height: 2.6rem;
  }
}
</style>