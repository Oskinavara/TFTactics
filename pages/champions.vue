<template>
  <div class="champions-page page">
    <div class="champions-page__inner inner">
      <div class="champions-page__sidebar sidebar">
        <champion-filters/>
      </div>
      <div class="champions-page__wrapper">
        <page-heading>
          Teamfight Tactics Champions List
          <template v-slot:content>
            <search-bar />
          </template>
        </page-heading>
        <div class="champions-page__champion-grid">
          <div
            class="champions-page__champion-block"
            v-for="champion in filteredChampions"
            :key="champion.key"
          >
            <champion-icon :champion="champion" v-size="55" />
            <p class="champions-page__champion-name">{{champion.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from '@/components/atoms/PageHeading.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'
import ChampionFilters from '@/components/organisms/ChampionFilters.vue'
import searchLogic from '@/logic/searchLogic.js'

import { mapState } from 'vuex'
export default {
  components: {
    PageHeading,
    SearchBar,
    ChampionIcon,
    ChampionFilters,
  },

  computed: {
    ...mapState(['champions']), 
    filteredChampions() {
      if (this.inputValue === '') {
        return this.champions
      }
      else {
        let filteredChampions = 
          Object.keys(this.champions)
          .filter(champion => this.champions[champion].name.toUpperCase().includes(this.inputValue.toUpperCase()))
          .reduce((filteredChampions, current) => ((filteredChampions[current] = this.champions[current]), filteredChampions), {})
        return filteredChampions
      }
    }
  },
  
  mixins: [searchLogic], 
}
</script>

<style lang="scss" scoped>
.champions-page {
  &__wrapper {
    padding: 0 0 0 3rem;
    border-left: 1px solid $border-color;
  }
  &__champion-grid {
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
    width: 83rem;
  }
  &__champion-block {
    padding: 0 2.4rem 6rem;
    position: relative;
    &:hover .champions-page__champion-name {
      color: $textwhite;
    }
  }
  &__champion-name {
    font-size: 1.4rem;
    text-align: center;
    color: $textgray;
    padding-top: 0.3rem;
    transition: all 0.3s;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
}
</style>