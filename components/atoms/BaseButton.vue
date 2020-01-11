<template>
  <div class="base-button">
    <button class="base-button__button" @click="$emit('click')">
      <slot>Reset</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style lang="scss" scoped>
.base-button {
  &__button {
    color: $textwhite;
    padding: 0 2rem;
    background: transparent;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.5;
    min-height: 35px;
    border: 1px solid $border-color;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      border-color: $orange-accent;
    }
  }
}
</style>