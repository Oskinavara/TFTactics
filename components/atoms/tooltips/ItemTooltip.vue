<template>
  <div class="item-tooltip">
    <div class="item-tooltip__heading">
      <img :src="itemUrl" :alt="itemAlt" class="item-tooltip__icon" />
      <div class="item-tooltip__heading-wrapper">
        <h2 class="item-tooltip__name">{{item.name}}</h2>
        <div class="item-tooltip__stats">
          <div class="item-tooltip__stat" v-for="stat in this.item.stats" :key="stat.name">
            <img
              :src="statUrl(stat.name)"
              :alt="statAlt(stat.title)"
              class="item-tooltip__stat-icon"
            />
            {{stat.amount}}
          </div>
        </div>
      </div>
    </div>
    <div class="item-tooltip__description">{{item.bonus}}</div>
    <div class="item-tooltip__recipes">
      {{ recipeText}}
      <img
        :src="itemUrlRecipe(itemname)"
        alt
        v-for="(itemname,index) in recipeItems"
        :key="index"
        class="item-tooltip__recipe-icon"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      items: state => state.apiData.items
    }),
    itemUrl() {
      let itemCapitalized = this.item.name
        .split('.')
        .join('')
        .split("'")
        .join('')
        .split(' ')
        .join('')
      return `https://rerollcdn.com/items/${itemCapitalized}.png`
    },
    itemAlt() {
      return `${this.item.name} splash art`
    },
    recipeText() {
      return this.item.depth === 2 ? 'Recipe:' : 'Into:'
    },
    recipeItems() {
      if (this.item.depth === 2) {
        return this.item.buildsFrom
      } else return this.item.buildsInto
    }
  },

  methods: {
    itemUrlRecipe(item) {
      let itemCapitalized = this.items[item].name
        .split('.')
        .join('')
        .split("'")
        .join('')
        .split(' ')
        .join('')
      return `https://rerollcdn.com/items/${itemCapitalized}.png`
    },
    statUrl(stat) {
      return `https://rerollcdn.com/ui/icon-${stat}.svg`
    },
    statAlt(stat) {
      return `${stat} splash art`
    }
  }
}
</script>

<style lang="scss" scoped>
.item-tooltip {
  z-index: 10000;
  position: absolute;
  border: 1px solid $border-color;
  top: -16rem;
  left: 50%;
  transform: translateX(-50%);
  min-width: 20rem;

  &__heading {
    display: flex;
    align-items: center;
    justify-content: left;
    color: white;
    font-size: 1.6rem;
    background: $dark-gray;
  }

  &__icon {
    height: 4.5rem;
    width: 4.5rem;
    margin: 0.5rem 1rem 0.5rem 0.5rem;
  }

  &__name {
    color: white;
    font-weight: 400;
    font-size: 1.6rem;
    font-weight: normal;
  }

  &__stats {
    display: flex;
  }

  &__stat {
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-right: 0.8rem;
  }

  &__stat-icon {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.5rem;
  }
  &__description {
    color: $textwhite;
    font-weight: 600;
    font-size: 1.4rem;
    white-space: nowrap;
    background: $dark-gray;
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    padding: 1rem;
    display: flex;
    text-overflow: ellipsis;
  }

  &__recipes {
    display: flex;
    flex-wrap: nowrap;
    color: $textgray;
    align-items: center;
    font-weight: 400;
    padding: 0.3rem 0.7rem;
    font-size: 1.4rem;
    background: $gray;
  }
  
  &__recipe-icon {
    height: 2.5rem;
    width: 2.5rem;
    margin: 0.4rem;
    border: 1px solid $border-color;
  }
}
</style>