<template>
  <div class="side-navbar">
    <nuxt-link
      v-for="item in routes"
      :key="item"
      :to="{
        path: `/${parentRoute}/${route(item)}`,
        name: `${parentRoute}-${route(item)}`,
        params: { heading: item }
      }"
      class="side-navbar__link"
    >
      <span>{{ item }}</span>
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
    },
    parentRoute: {
      type: String,
      default: 'tierlist'
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

  @include media-l {
    margin-bottom: 0;
  }

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

    @include media-l {
      border: 1px solid $border-color;
      margin: 0;
      padding: 2rem 0;

      &::before {
        content: none;
      }
    }

    span {
      transition: transform 0.4s;
      transform: translateX(0);
      display: block;

      @include media-l {
        text-align: center;
      }
    }
  }
}

.active-link {
  color: $textwhite;

  @include media-l {
    border: 2px solid $orange-accent;
  }

  span {
    transform: translateX(2rem);

    @include media-l {
      transform: translateX(0);
    }
  }

  &::before {
    transition: all 0.4s;
    transform: scaleX(1);
  }
}
</style>
