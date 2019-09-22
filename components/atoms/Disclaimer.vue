<template>
  <div class="disclaimer">
    <p class="disclaimer__text">
      The order within the tiers does not matter. If you have any feedback,
      <a
        href="#"
        class="disclaimer__link"
      >I'd love to read it.</a>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.disclaimer {
  width: 100%;
  padding: 1rem;
  border: 1px solid $orange-accent;
  margin: 2rem 0;
  &__text {
    color: $textwhite;
    font-family: 'Sofia Pro Light';
  }
  &__link {
    color: #6287a7;
    text-decoration: none;
    &:hover {
      color: #83a0b9;
    }
  }
}
</style>