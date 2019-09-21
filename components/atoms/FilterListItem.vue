<template>
  <li class="filter-list-item">
    <img :src="icon" alt="gold icon" class="filter-list-item__icon" v-size="24" />
    <p class="filter-list-item__text">
      <slot></slot>
    </p>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'https://rerollcdn.com/ui/icon-gold.svg'
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-list-item {
  list-style: none;
  position: relative;
  width: 30rem;
  padding: 0.75rem 0;
  cursor: pointer;
  &:first-of-type {
    padding-top: 1.5rem;
  }
  &::after {
    content: '';
    display: block;
    height: 1.2rem;
    width: 1.2rem;
    position: absolute;
    background: transparent;
    border-radius: 50%;
    border: 2px solid $textgray;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    transition: all 0.3s;
  }
  &:hover {
    &::after {
      border: 2px solid $textwhite;
    }
  }
  &__icon {
    height: 1.35rem;
    width: 1.5rem;
    opacity: 0.54;
    margin-right: 1rem;
  }
  &__text {
    display: inline-block;
    position: relative;
    bottom: 0.5rem;
    font-family: 'Sofia Pro ExtraLight';
    font-weight: 800;
    color: $textwhite;
    line-height: 2rem;
    text-transform: capitalize;
  }
}
</style>