<template>
  <div>
    <div class="origin-icon">
      <img
        @mouseover="toggleHover"
        @mouseleave="toggleHover"
        :src="originUrl"
        :alt="originAlt"
        class="origin-icon__image"
      />
      <!-- :class="['origin-icon__image', borderColor,  hover ? 'border-active' : '']"  -->
      <p class="origin-icon__text">{{origin.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    origin: {
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
    originUrl() {
      return `https://rerollcdn.com/icons/${this.origin.key}.png`
    },
    originAlt() {
      return `${this.origin.key} splash art`
    }
  }
}
</script>

<style lang="scss" scoped>
.origin-icon {
  height: 5.35rem;
  width: 9rem;
  margin: auto;
  position: relative;
  &__image {
    height: 3rem;
    width: 3rem;
    text-align: center;
    transition: all 0.3s;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  &__text {
    text-align: center;
    font-size: 1.4rem;
    color: $textgray;
  }
}
</style>