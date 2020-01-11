<template>
  <div class="champion-icon">
    <component
      :is="isLink ? 'nuxt-link' : 'div'"
      :to="`/champions/${champion.key}`"
      @click="selectChampion()"
    >
      <div class="champion-icon__origins" v-if="showOrigins">
        <img
          :src="originIconUrl(origin)"
          :alt="originIconAlt(origin)"
          class="champion-icon__origin"
          v-for="origin in champion.origin"
        />
        <img
          :src="originIconUrl(origin)"
          :alt="originIconAlt(origin)"
          class="champion-icon__origin"
          v-for="origin in champion.class"
        />
      </div>
      <img
        @mouseover="toggleHover"
        @mouseleave="toggleHover"
        :src="championUrl"
        :alt="championAlt"
        :class="['champion-icon__image', borderColor, borderHover]"
      />
      <p class="champion-icon__name" v-if="showName">{{champion.name}}</p>
    </component>
    <champion-tooltip v-show="hover" :champion="champion" />
  </div>
</template>

<script>
import ChampionTooltip from '@/components/atoms/tooltips/ChampionTooltip.vue'
import iconUrls from '@/logic/iconUrls.js'
import showTooltip from '@/logic/showTooltip.js'

export default {
  name: 'ChampionIcon',

  components: {
    ChampionTooltip
  },

  mixins: [iconUrls, showTooltip],

  props: {
    champion: {
      type: Object,
      required: true
    },
    isLink: {
      type: Boolean,
      required: false,
      default: true
    },
    disableHoverEffect: {
      type: Boolean,
      required: false,
      default: false
    },
    showOrigins: {
      type: Boolean,
      required: false,
      default: false
    },
    showName: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    championSelected() {
      let team = this.$store.state.team
      return team.includes(this.champion)
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
    },
    borderHover() {
      if (!this.disableHoverEffect) {
        return 'border-orange'
      }
    }
  },

  methods: {
    selectChampion() {
      this.$store.dispatch('addChampion', this.champion)
    },
    originIconUrl(origin) {
      return `https://rerollcdn.com/icons/${origin.toLowerCase()}.png`
    },
    originIconAlt(origin) {
      return `${origin} splash art`
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
  transition: all 0.3s;

  &__image {
    height: 100%;
    width: 100%;
    transition: all 0.3s;
    border: 1px solid;
  }

  &__origins {
    position: absolute;
    left: 50%;
    top: -1.3rem;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    min-width: 9rem;
  }

  &__origin {
    height: 2.6rem;
    width: 2.6rem;
    min-height: 2.6rem;
    min-width: 2.6rem;
    padding: 0.3rem;
    border-radius: 50%;
    background: $dark-blue;
  }

  &__name {
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.3em;
    color: $textgray;
    padding-top: 0.3rem;
    transition: all 0.3s;
    font-weight: 600;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
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

.border-orange {
  &:hover {
    border: 1px solid $orange-accent;
  }
}
</style>