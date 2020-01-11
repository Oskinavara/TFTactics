<template>
  <div class="hamburger-menu" @click="menuOpened = !menuOpened">
    <div
      :class="[
      'hamburger-menu__inner', 
      {'hamburger-menu__inner--opened': menuOpened}
    ]"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpened: false
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger-menu {
  width: 2.5rem;
  height: 2rem;
  cursor: pointer;
  position: relative;

  &__inner {
    height: 0.3rem;
    background: $white;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.15s;

    &::before,
    &::after {
      content: '';
      height: 0.3rem;
      background: $white;
      width: 100%;
      position: absolute;
      transform-origin: center;
    }

    &::before {
      bottom: 0.8rem;
      transition: transform 0.2s, bottom 0.1s 0.2s;
    }

    &::after {
      top: 0.8rem;
      transition: transform 0.2s, top 0.1s 0.2s;
    }

    &--opened {
      background: rgba(0, 0, 0, 0);

      &::before {
        bottom: 0;
        transform: rotate(135deg);
        transition: bottom 0.1s, transform 0.2s 0.1s;
      }

      &::after {
        top: 0;
        transform: rotate(225deg);
        transition: top 0.1s, transform 0.2s 0.1s;
      }
    }
  }
}
</style>