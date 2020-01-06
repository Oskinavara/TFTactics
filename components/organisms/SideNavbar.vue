<template>
  <div class="side-navbar">
    <div class="side-navbar__navbar">
      <nuxt-link to="/tierlist/champions" class="side-navbar__nav-link">Champions</nuxt-link>
      <nuxt-link to="/tierlist/team-comps" class="side-navbar__nav-link">Team Comps</nuxt-link>
      <nuxt-link to="/tierlist/origins" class="side-navbar__nav-link">Origins</nuxt-link>
      <nuxt-link to="/tierlist/classes" class="side-navbar__nav-link">Classes</nuxt-link>
      <nuxt-link to="/tierlist/items" class="side-navbar__nav-link">Items</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-navbar {
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