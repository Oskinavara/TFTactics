<template functional>
  <div class="heading-underlined">
    <h3 class="heading-underlined__text">
      <slot />
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.heading-underlined {
  margin: 2rem 0 1rem 0;
  width: 100%;
  border-bottom: 1px solid $border-color;

  &__text {
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: $textwhite;
    display: inline-block;
    border-bottom: 4px solid $orange-accent;
    padding: 0 1rem 1rem 1rem;
  }
}
</style>