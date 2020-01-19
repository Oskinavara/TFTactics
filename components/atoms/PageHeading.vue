<template functional>
  <div class="page-heading">
    <h2 class="page-heading__heading">
      <slot />
    </h2>
    <slot name="content" />
  </div>
</template>

<style lang="scss" scoped>
.page-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include media-m {
    flex-direction: column;
    align-items: flex-start;
  }

  &__heading {
    color: $textwhite;
    font-size: 2.1rem;
    letter-spacing: 0.07rem;
    color: $textwhite;
    font-weight: 800;
    line-height: 3.5rem;
  }
}
</style>