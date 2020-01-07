<template>
  <div class="champion-icon">
    <nuxt-link :to="`/champions/${champion.key}`">
      <img
        @mouseover="toggleHover"
        @mouseleave="toggleHover"
        :src="championUrl"
        :alt="championAlt"
        :class="['champion-icon__image', borderColor,  {'border-active': hover}]"
      />
    </nuxt-link>
    <champion-tooltip v-show="hover" :champion="champion" />
  </div>
</template>

<script>
import ChampionTooltip from '@/components/atoms/tooltips/ChampionTooltip.vue'
import iconUrls from '@/logic/iconUrls.js'

export default {
  name: 'ChampionIcon',

  components: {
    ChampionTooltip
  },

  mixins: [iconUrls],

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
    showTooltip() {
      if (this.hover) {
        setTimeout(() => {
          return true
        }, 300)
      }
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
  cursor: pointer;
  position: relative;

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