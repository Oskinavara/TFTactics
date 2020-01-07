<template>
  <div class="champion-tooltip">
    <div class="champion-tooltip__wrapper">
      <div class="champion-tooltip__heading">
        <img :src="championUrl" :alt="championAlt" class="champion-tooltip__icon" />
        {{champion.name}}
      </div>
      <div class="champion-tooltip__origins">
        <div
          class="champion-tooltip__origin-wrapper"
          v-for="origin in championOriginList"
          :key="origin"
        >
          <img :src="championOriginUrl(origin)" alt class="champion-tooltip__origin-icon" />
          <p class="champion-tooltip__origin-name">{{origin}}</p>
        </div>
      </div>
      <div class="champion-tooltip__cost">
        <img
          src="https://rerollcdn.com/ui/icon-gold.svg"
          alt="gold icon"
          class="champion-tooltip__gold-icon"
        />
        {{champion.cost}}
      </div>
    </div>
    <div class="champion-tooltip__items">
      Items:
      <img
        :src="tooltipUrl(item)"
        :alt="tooltipAlt(item)"
        v-for="item in champion.items"
        :key="item"
        class="champion-tooltip__item-icon"
      />
    </div>
  </div>
</template>

<script>
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'
import iconUrls from '@/logic/iconUrls.js'
import { mapState } from 'vuex'

export default {
  name: 'ChampionTooltip',

  components: {
    ChampionIcon
  },

  mixins: [iconUrls],

  props: {
    champion: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapState({
      items: state => state.apiData.items
    }),
    championOriginList() {
      return this.champion.origin.concat(this.champion.class)
    }
  },

  methods: {
    championOriginUrl(origin) {
      let originLowerCase = origin.toLowerCase()
      return `https://rerollcdn.com/icons/${originLowerCase}.png`
    },
    championOriginAlt(origin) {
      return `${origin} splash art`
    },
    tooltipUrl(item) {
      let itemCapitalized = this.items[item].name
        .split('.')
        .join('')
        .split("'")
        .join('')
        .split(' ')
        .join('')
      return `https://rerollcdn.com/items/${itemCapitalized}.png`
    },
    tooltipAlt(item) {
      return `${this.items[item].name} splash art`
    }
  }
}
</script>

<style lang="scss" scoped>
.champion-tooltip {
  z-index: 10000;
  position: absolute;
  border: 1px solid $border-color;
  top: -16rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 500px;

  &__wrapper {
    display: flex;
    min-height: 10rem;
  }

  &__heading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: $textwhite;
    font-size: 1.6rem;
    font-weight: 600;
    background: $dark-gray;
    padding: 0 1rem;
  }

  &__icon {
    height: 4.5rem;
    width: 4.5rem;
    margin-bottom: 0.5rem;
  }

  &__name {
    color: white;
  }

  &__origins {
    border-left: 1px solid $border-color;
    border-right: 1px solid $border-color;
    display: flex;
    align-items: top;
    flex-direction: column;
    justify-content: center;
    background: $dark-gray;
    padding: 0rem 1rem;
  }

  &__origin-wrapper {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
  }

  &__origin-icon {
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }

  &__origin-name {
    color: $textwhite;
    line-height: 1.4rem;
    font-weight: 10;
    font-weight: 400;
  }

  &__cost {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $gray;
    color: $textwhite;
    padding: 0 1rem;
  }

  &__gold-icon {
    width: 1.3rem;
    height: 1.3rem;
    opacity: 0.54;
    margin-right: 0.5rem;
  }

  &__items {
    background: $gray;
    width: 100%;
    color: $textgray;
    border-top: 1px solid $border-color;
    display: flex;
    padding: 1rem 1rem;
    line-height: 1.8rem;
  }

  &__item-icon {
    height: 2.2rem;
    width: 2.2rem;
    margin: 0 0.5rem;
  }
}
</style>