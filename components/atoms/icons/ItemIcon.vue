<template>
  <div class="item-icon">
    <img
      @mouseover="toggleHover"
      @mouseleave="toggleHover"
      :src="itemUrl"
      :alt="itemAlt"
      :class="['item-icon__image', borderColor,  hover ? 'border-active' : '']"
    />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hover: false
    }
  },

  methods: {
    toggleHover() {
      this.hover = !this.hover
    }
  },
  computed: {
    itemUrl() {
      let url = this.item.name
      let newUrl = url
        .split('.')
        .join('')
        .split("'")
        .join('')
        .split(' ')
        .join('')
      return `https://rerollcdn.com/items/${newUrl}.png`
    },
    itemAlt() {
      return `${this.item.key} splash art`
    }
  }
}
</script>

<style lang="scss" scoped>
.item-icon {
  height: 4.5rem;
  width: 4.5rem;
  margin: auto;
  cursor: pointer;
  &__image {
    height: 100%;
    width: 100%;
    transition: all 0.3s;
    border: 1px solid;
  }
}
.border-active {
  border: 1px solid $orange-accent !important;
}
</style>