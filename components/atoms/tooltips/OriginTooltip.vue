<template>
  <div class="origin-tooltip">
    <div class="origin-tooltip__title">
      <img :src="originUrl" :alt="originAlt" class="origin-tooltip__icon">
      <h2 class="origin-tooltip__name">{{origin.name}}</h2>
    </div>
    <div class="origin-tooltip__content">
      <p class="origin-tooltip__description"></p>
      <div class="origin-tooltip__bonus">
        <div class="origin-tooltip__number"></div>
        <p class="origin-tooltip__bonus-description"></p>
      </div>
    </div>
    <div class="origin-tooltip__champions"></div>
  </div>
</template>

<script>
  export default {
    props: {
      origin: {
        type: Object,
        required: true
      },
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
.origin-tooltip{
  
}
</style>