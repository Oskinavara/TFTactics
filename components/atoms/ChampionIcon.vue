<template>
  <div class="champion-icon">
    <img :src="championUrl" :alt="championAlt" :style="borderColor" class="champion-icon__image" />
  </div>
</template>

<script>
export default {
  props: {
    champion: {
      type: String,
      required: true
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
  border: 1px solid;
}
</style>