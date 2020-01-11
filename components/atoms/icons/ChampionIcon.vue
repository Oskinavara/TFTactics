<template>
  <div class="champion-icon">
    <component
      :is="isTeamBuilder ? 'div' : 'nuxt-link'"
      :to="`/champions/${champion.key}`"
      @click="selectChampion()"
    >
      <img
        @mouseover="toggleHover"
        @mouseleave="toggleHover"
        :src="championUrl"
        :alt="championAlt"
        :class="['champion-icon__image', borderColor, borderHover, {'champion-icon--selected': championSelected}]"
      />
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
    isTeamBuilder: {
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
      if (!this.isTeamBuilder) {
        return 'border-orange'
      }
    }
  },

  methods: {
    selectChampion() {
      this.$store.dispatch('addChampion', this.champion)
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

  &--selected {
    opacity: 0.5;
    filter: grayscale(1);
  }

  &__image {
    height: 100%;
    width: 100%;
    transition: all 0.3s;
    border: 1px solid;
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