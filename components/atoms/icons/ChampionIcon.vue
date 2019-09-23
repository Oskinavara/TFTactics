<template>
  <div class="champion-icon">
    <img
      @mouseover="toggleHover"
      @mouseleave="toggleHover"
      :src="championUrl"
      :alt="championAlt"
      :class="['champion-icon__image', borderColor,  hover ? 'border-active' : '']"
    />
  </div>
</template>

<script>
export default {
  props: {
    champion: {
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
    championUrl() {
      return `https://rerollcdn.com/characters/${this.champion.key}.png`
    },
    championAlt() {
      return `${this.champion.key} splash art`
    },
    borderColor() {
      switch (this.champion.cost) {
        case 1:
          return 'border-common'
          break
        case 2:
          return 'border-uncommon'
          break
        case 3:
          return 'border-rare'
          break
        case 4:
          return 'border-epic'
          break
        case 5:
          return 'border-legendary'
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.champion-icon {
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
.border-common {
  border-color: $common;
}
.border-uncommon {
  border-color: $uncommon;
}
.border-rare {
  border-color: $rare;
}
.border-epic {
  border-color: $epic;
}
.border-legendary {
  border-color: $legendary;
}
</style>