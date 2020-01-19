<template>
  <div class="mobile-menu" @click="toggleMenu">
    <h2 class="mobile-menu__heading">Navigation</h2>
    <nuxt-link to="/champions" class="mobile-menu__link">Champions</nuxt-link>
    <nuxt-link
      :to="{path: '/tierlist', name: 'tierlist', params: {heading: 'Champions'}}"
      class="mobile-menu__link"
    >Tier Lists</nuxt-link>
    <nuxt-link to="/item-builder" class="mobile-menu__link">Item Builder</nuxt-link>
    <nuxt-link to="/team-builder" class="mobile-menu__link">Team Builder</nuxt-link>
    <nuxt-link
      :to="{path: '/db', name: 'db', params: {heading: 'Champions'}}"
      class="mobile-menu__link"
    >Database</nuxt-link>
    <nuxt-link to="/patch-notes" class="mobile-menu__link">Patch Notes</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',

  methods: {
    toggleMenu() {
      this.$store.dispatch('toggleMobileMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  top: 4.9rem;
  z-index: 1000000;
  height: 100vh;
  width: 100vw;
  background: $gray;
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__heading {
    margin-bottom: 3rem;
  }

  &__link {
    line-height: 5.6rem;
    text-decoration: none;
  }
}
</style>