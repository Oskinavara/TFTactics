<template>
  <div class="origin-tooltip">
    <div class="origin-tooltip__heading">
      <img :src="originUrl" :alt="originAlt" class="origin-tooltip__icon" />
      {{ origin ? origin.name : '' }}
    </div>
    <div class="origin-tooltip__content">
      <p v-if="origin.description" class="origin-tooltip__description">
        {{ origin.description }}
      </p>
      <div
        v-for="bonus in origin.bonuses"
        :key="bonus.needed"
        class="origin-tooltip__bonus"
      >
        <div 
          :class="[
            'origin-tooltip__bonus-number',
            {'origin-tooltip__bonus-number--active': isTeamBuilder && count >= bonus.needed}
          ]"
        >
          {{ bonus.needed }}
        </div>
        <p
          :class="[
            'origin-tooltip__bonus-description',
            {'origin-tooltip__bonus-description--inactive': isTeamBuilder && count < bonus.needed}
          ]"
        >
          {{ bonus.effect }}
        </p>
      </div>
    </div>
    <div class="origin-tooltip__champions">
      Champions:
      <ChampionIcon
        v-for="champion in originChampions"
        :key="champion.name"
        :champion="champion"
        class="origin-tooltip__champion"
      />
      <ChampionIcon
        v-for="champion in classChampions"
        :key="champion.name"
        :champion="champion"
        class="origin-tooltip__champion"
      />
    </div>
  </div>
</template>

<script>
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'
import iconUrls from '@/logic/iconUrls.js'
import { mapState } from 'vuex'

export default {
  name: 'OriginTooltip',

  components: {
    ChampionIcon
  },

  mixins: [iconUrls],

  props: {
    origin: {
      type: Object,
      required: true
    },
    isTeamBuilder: {
      type: Boolean,
      required: false,
      default: false
    },
    count: {
      type: Number,
      required: false,
      default: 0
    }
  },

  computed: {
    ...mapState({
      champions: state => state.apiData.champions
    }),
    originChampions() {
      let champions = { ...this.champions }
      for (let champion in champions) {
        if (!champions[champion].origin.includes(this.origin.name)) {
          delete champions[champion]
        }
      }
      return champions
    },
    classChampions() {
      let champions = { ...this.champions }
      for (let champion in champions) {
        if (!champions[champion].class.includes(this.origin.name)) {
          delete champions[champion]
        }
      }
      return champions
    }
  }
}
</script>

<style lang="scss" scoped>
.origin-tooltip {
  z-index: 10000;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  border: 1px solid $border-color;
  width: max-content;
  max-width: 500px;

  &:hover {
    display: none !important;
  }

  &__heading {
    display: flex;
    align-items: center;
    color: $white;
    font-size: 1.6rem;
    font-weight: normal;
    background: $dark-gray;
    padding: 1rem;
    border-bottom: 1px solid $border-color;
  }

  &__icon {
    height: 2.5rem;
    min-height: 2.5rem;
    width: 2.5rem;
    min-width: 2.5rem;
    margin-right: 0.5rem;
  }

  &__content {
    border-bottom: 1px solid $border-color;
    padding: 0.5rem 0;
    background: $dark-gray;
  }

  &__description {
    color: $textwhite;
    padding: 1rem 1rem;
  }

  &__bonus {
    display: flex;
    padding: 0.5rem 1rem;

    &-number {
      border: 1px solid $border-color;
      border-radius: 50%;
      height: 2.5rem;
      width: 2.5rem;
      min-width: 2.5rem;
      font-size: 1.4rem;
      line-height: 2.2rem;
      display: flex;
      place-content: center;
      color: $textgray;
      font-weight: 600;
      margin-right: 1rem;

      &--active {
        border: 1px solid $orange-accent;
      }
    }

    &-description {
      line-height: 2.5rem;
      color: $textwhite;

      &--inactive {
        color: $textgray--dark;
      }
    }
  }

  &__champions {
    color: $textgray;
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    background: $gray;
  }

  &__champion {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 0.25rem;
    &:first-of-type {
      margin-left: 1rem;
    }
  }
}
</style>
