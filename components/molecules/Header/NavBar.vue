<template>
  <div class="nav-bar">
    <nuxt-link to="/champions" class="nav-bar__nav-link">Champions</nuxt-link>
    <div class="nav-bar__wrapper">
      <nuxt-link
        :to="{path: '/tierlist', name: 'tierlist', params: {heading: 'Champions'}}"
        class="nav-bar__nav-link"
      >Tier Lists</nuxt-link>
      <div class="nav-bar__sub-menu">
        <nuxt-link to="/tierlist/champions" class="nav-bar__sub-link">Champions</nuxt-link>
        <nuxt-link to="/tierlist/team-comps" class="nav-bar__sub-link">Team Comps</nuxt-link>
        <nuxt-link to="/tierlist/origins" class="nav-bar__sub-link">Origins</nuxt-link>
        <nuxt-link to="/tierlist/classes" class="nav-bar__sub-link">Classes</nuxt-link>
        <nuxt-link to="/tierlist/items" class="nav-bar__sub-link">Items</nuxt-link>
      </div>
    </div>
    <nuxt-link to="/item-builder" class="nav-bar__nav-link">Item Builder</nuxt-link>
    <nuxt-link to="/team-builder" class="nav-bar__nav-link">Team Builder</nuxt-link>
    <div class="nav-bar__wrapper">
      <nuxt-link
        :to="{path: '/db', name: 'db', params: {heading: 'Champions'}}"
        class="nav-bar__nav-link"
      >Database</nuxt-link>
      <div class="nav-bar__sub-menu">
        <nuxt-link to="/db/champions" class="nav-bar__sub-link">Champions</nuxt-link>
        <nuxt-link to="/db/champion-stats" class="nav-bar__sub-link">Champion Stats</nuxt-link>
        <nuxt-link to="/db/origins" class="nav-bar__sub-link">Origins</nuxt-link>
        <nuxt-link to="/db/classes" class="nav-bar__sub-link">Classes</nuxt-link>
        <nuxt-link to="/db/items" class="nav-bar__sub-link">Items</nuxt-link>
      </div>
    </div>
    <nuxt-link to="/patch-notes" class="nav-bar__nav-link">Patch Notes</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  align-items: center;

  &__wrapper {
    position: relative;
    z-index: 10000;

    &:hover {
      .nav-bar__sub-menu {
        display: block;
      }
    }

    .nav-bar__nav-link::after {
      bottom: -1.8rem;
    }
  }

  &__nav-link {
    height: 100%;
    line-height: 6rem;
    position: relative;
    text-decoration: none;
    color: $textgray;
    padding: 0 2rem;
    font-weight: 600;
    @include hover-lighten;

    &::after {
      content: '';
      position: absolute;
      bottom: 0rem;
      left: 0;
      width: 100%;
      height: 0.4rem;
      background: $orange-accent;
      transform: scaleX(0);
      transition: all 0.2s;
      pointer-events: none;
    }
  }

  &__sub-menu {
    background: $dark-gray;
    border: 1px solid $border-color;
    position: absolute;
    top: 6rem;
    display: none;
  }

  &__sub-link {
    display: block;
    text-decoration: none;
    color: $textwhite;
    font-weight: 600;
    white-space: nowrap;
    padding: 1rem 6rem 1rem 3rem;
    @include hover-lighten;
  }
}

.active-link {
  color: $textwhite;
  &::after {
    transform: scaleX(1);
  }
}
</style>