<template>
  <div class="champion-tooltip">
    <div class="champion-tooltip__title">
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
    <div class="champion-tooltip__items"></div>
  </div>
</template>

<script>
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'
export default {
  components: {
    ChampionIcon
  },
  props: {
    champion: {
      type: Object,
      required: true
    }
  },
  computed: {
    championUrl() {
      return `https://rerollcdn.com/characters/${this.champion.key}.png`
    },
    championAlt() {
      return `${this.champion.key} splash art`
    },
    championOriginList() {
      return this.champion.origin.concat(this.champion.class)
    }
  },
  methods: {
    championOriginUrl(origin) {
      let originLowerCase = origin.toLowerCase()
      return `https://rerollcdn.com/icons/${originLowerCase}.png`
    }
  }
}
</script>

<style lang="scss" scoped>
.champion-tooltip {
  display: grid;
  grid-template: 9rem 3rem / 1fr 1fr 0.3fr;
  z-index: 10000;
  background: green;
  position: absolute;
  border: 1px solid $border-color;
  top: -12rem;
  left: 50%;
  transform: translateX(-50%);
  &__title {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: $textwhite;
    font-size: 1.6rem;
    font-family: 'Sofia Pro Medium';
    background: $dark-gray;
  }

  &__icon {
    height: 4.5rem;
    width: 4.5rem;
  }
  &__name {
    color: white;
  }
  &__origins {
    border-left: 1px solid $border-color;
    border-right: 1px solid $border-color;
    grid-area: 1 / 2 / 1 / 3;
    display: flex;
    align-items: top;
    flex-direction: column;
    justify-content: center;
    background: $dark-gray;
    padding: 1rem 2rem;
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
}
</style>