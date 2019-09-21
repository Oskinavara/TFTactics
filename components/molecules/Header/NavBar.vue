<template>
  <div class="nav-bar">
    <nuxt-link to="/champions" class="nav-bar__nav-link">Champions</nuxt-link>
    <nuxt-link to="/tierlist/champions" class="nav-bar__nav-link">Tier Lists</nuxt-link>
    <nuxt-link to="/item-builder" class="nav-bar__nav-link">Item Builder</nuxt-link>
    <nuxt-link to="/team-builder" class="nav-bar__nav-link">Team Builder</nuxt-link>
    <nuxt-link to="/database" class="nav-bar__nav-link">Database</nuxt-link>
    <nuxt-link to="/patch-notes" class="nav-bar__nav-link">Patch Notes</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  &__nav-link {
    position: relative;
    text-decoration: none;
    color: $textgray;
    padding: 0 2rem;
    font-family: 'Sofia Pro Medium';
    &:hover,
    &:active {
      color: white;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: -1.8rem;
      left: 0;
      width: 100%;
      height: 0.4rem;
      background: $orange-accent;
      transform: scaleX(0);
      transition: all 0.2s;
    }
  }
}
.active-link {
  &::after {
    transform: scaleX(1);
  }
}
</style>