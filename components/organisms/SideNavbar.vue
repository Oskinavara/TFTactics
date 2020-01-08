<template>
  <div class="side-navbar">
    <nuxt-link
      v-for="item in routes"
      :key="item"
      :to="{path: `/tierlist/${route(item)}`, name: `tierlist-${route(item)}`, params: {heading: item}}"
      class="side-navbar__link"
    >
      <span>{{item}}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'SideNavbar',

  props: {
    routes: {
      type: Array,
      required: true
    }
  },

  methods: {
    route(item) {
      return item.toLowerCase().replace(' ', '-')
    }
  }
}
</script>
<style lang="scss" scoped>
.side-navbar {
  margin-bottom: 4rem;

  &__link {
    text-decoration: none;
    color: $textgray;
    display: block;
    margin: 1rem 0;
    padding: 1rem 0;
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 600;
    @include blue-rect;
    @include hover-lighten;

    span {
      transition: transform 0.4s;
      transform: translateX(0);
      display: block;
    }
  }
}

.active-link {
  color: $textwhite;

  span {
    transform: translateX(2rem);
  }

  &::before {
    transition: all 0.4s;
    transform: scaleX(1);
  }
}
</style>