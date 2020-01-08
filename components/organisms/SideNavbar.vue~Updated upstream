<template>
  <div class="side-navbar">
    <div class="side-navbar__navbar">
      <nuxt-link
        v-for="item in routes"
        :key="item"
        :to="route(item)"
        class="side-navbar__nav-link"
      >{{item}}</nuxt-link>
    </div>
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

  &__nav-link {
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