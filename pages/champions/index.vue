<template>
  <div class="champions-page page">
    <div class="champions-page__inner inner">
      <div class="champions-page__sidebar sidebar">
        <champion-filters />
      </div>
      <div class="champions-page__wrapper">
        <page-heading>
          Teamfight Tactics Champions List
          <template #content>
            <search-bar />
          </template>
        </page-heading>
        <filter-tags />
        <div class="champions-page__champion-grid">
          <div
            class="champions-page__champion-block"
            v-for="champion in filteredChampions(Object.keys(champions))"
            :key="champion.key"
          >
            <champion-icon :champion="champions[champion]" :showName="true" />
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
import filterChampions from '@/logic/filterChampions.js'
import FilterTags from '@/components/molecules/FilterTags.vue'
import { mapState } from 'vuex'

export default {
  name: 'ChampionsPage',

  components: {
    PageHeading,
    SearchBar,
    ChampionIcon,
    ChampionFilters,
    FilterTags
  },

  computed: {
    ...mapState({
      champions: state => state.apiData.champions,
      filters: state => state.filters
    })
  },

  mixins: [searchLogic, filterChampions]
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

    .champion-icon {
      height: 5.5rem;
      width: 5.5rem;
      margin: auto;
    }
  }
}
</style>