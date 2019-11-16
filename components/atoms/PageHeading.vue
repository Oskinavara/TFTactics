<template>
  <div class="page-heading">
    <h2 class="page-heading__heading">
      <slot/>
    </h2>
    <slot name="content"/>
  </div>
</template>

<style lang="scss" scoped>
.page-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__heading {
    color: $textwhite;
    font-size: 2.1rem;
    letter-spacing: 0.1rem;
    color: $textwhite;
    font-family: 'Sofia Pro Light';
    line-height: 3.5rem;
  }
}
</style>