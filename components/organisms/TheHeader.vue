<template>
  <header class="the-header">
    <div class="the-header__inner">
      <main-logo />
      <nav-bar />
    </div>
  </header>
</template>

<script>
import MainLogo from '@/components/atoms/Header/MainLogo.vue'
import NavBar from '@/components/atoms/Header/NavBar.vue'
export default {
  components: {
    MainLogo,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.the-header {
  background-color: $gray;
  &__inner {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
  }
}
</style>