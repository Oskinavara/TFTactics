<template>
  <a class="logo">
    <img src="~/assets/icons/logo.svg" alt="main logo" class="logo__image" />
    <h1 class="logo__title">tftactics</h1>
  </a>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  // height: 26px;
  height: 2rem;
  &__image {
    height: 100%;
    width: auto;
  }
  &__title {
    position: absolute;
    font-size: 20px;
    left: 2.5rem;
    font-family: 'Sofia Pro Medium';
    // letter-spacing: -0.05rem;
  }
}
</style>