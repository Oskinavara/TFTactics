<template>
  <div class="tierlist-side-navbar">
    <div class="tierlist-side-navbar__navbar">
      <nuxt-link to="/tierlist/champions" class="tierlist-side-navbar__nav-link">Champions</nuxt-link>
      <nuxt-link to="/tierlist/team-comps" class="tierlist-side-navbar__nav-link">Team Comps</nuxt-link>
      <nuxt-link to="/tierlist/origins" class="tierlist-side-navbar__nav-link">Origins</nuxt-link>
      <nuxt-link to="/tierlist/classes" class="tierlist-side-navbar__nav-link">Classes</nuxt-link>
      <nuxt-link to="/tierlist/items" class="tierlist-side-navbar__nav-link">Items</nuxt-link>
    </div>
  </div>
</template>

<script>
import Disclaimer from '@/components/atoms/Disclaimer.vue'
export default {
  components: {
    Disclaimer
  }
}
</script>

<style lang="scss" scoped>
.tierlist-side-navbar {
  margin-bottom: 4rem;
  &__nav-link {
    text-decoration: none;
    color: $textgray;
    display: block;
    margin: 1rem 0;
    padding: 1rem 0;
    font-size: 1.6rem;
    line-height: 1.6rem;
    @include blue-rect;
    @include hover-lighten;
  }
}
.active-link {
  transform: translateX(2rem);
  color: $textwhite;
  &::before {
    transform: scaleX(1) translateX(-2rem);
  }
}
</style>