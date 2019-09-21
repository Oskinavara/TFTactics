<template>
  <div class="champion-icon">
    <img
      @mouseover="toggleHover"
      @mouseleave="toggleHover"
      :src="championUrl"
      :alt="championAlt"
      :class="['champion-icon__image', hover ? 'border-active' : '']"
    />
  </div>
</template>
// 
<script>
export default {
  props: {
    champion: {
      type: String,
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
    championUrl() {
      return `https://rerollcdn.com/characters/${this.champion}.png`
    },
    championAlt() {
      return `${this.champion} splash art`
    },
    borderColor() {
      return `border: 1px solid white`
    }
  }
}
</script>

<style lang="scss" scoped>
.champion-icon {
  height: 45px;
  width: 45px;
  cursor: pointer;
  &__image {
    height: 100%;
    width: 100%;
    border: 1px solid $epic;
    transition: all 0.4s;
  }
}
.border-active {
  border: 1px solid $orange-accent;
}
</style>