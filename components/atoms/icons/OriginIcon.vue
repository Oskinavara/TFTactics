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
      <p class="origin-icon__text">{{origin.name}}</p>
    </div>
    <origin-tooltip v-show="hover" :origin="origin"/>
  </div>
</template>

<script>
import OriginTooltip from '@/components/atoms/tooltips/OriginTooltip.vue'
export default {
  components: {
    OriginTooltip,
  },
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