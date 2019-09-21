<template>
  <div class="champions-page">
    <champion-filters></champion-filters>
    <div class="champions-page__wrapper">
      <div class="champions-page__heading-wrapper">
        <page-heading>Teamfight Tactics Champions List</page-heading>
        <search-bar></search-bar>
      </div>
      <div class="champions-page__champion-grid">
        <div
          v-for="champion in champions"
          :key="champion.key"
          class="champions-page__champion-block"
        >
          <champion-icon :champion="champion" v-size="55" />
          <p class="champions-page__champion-name">{{champion.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from '@/components/atoms/PageHeading.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'
import ChampionIcon from '@/components/atoms/ChampionIcon.vue'
import FilterListItem from '@/components/atoms/FilterListItem.vue'
import ChampionFilters from '@/components/molecules/pages/ChampionFilters.vue'

import { mapState } from 'vuex'
export default {
  components: {
    PageHeading,
    SearchBar,
    FilterListItem,
    ChampionIcon,
    ChampionFilters
  },
  computed: mapState(['champions'])
}
</script>

<style lang="scss" scoped>
.champions-page {
  background: $gray;
  padding: 3rem 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  &__wrapper {
    max-width: 1200px;
    margin: auto;
    width: 50%;
  }
  &__heading-wrapper {
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
  }
  &__champion-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 3fr));
    border-top: 1px solid $border-color;
    padding: 3rem;
  }
  &__champion-block {
    margin-bottom: 3rem;
    &:hover .champions-page__champion-name {
      color: white;
    }
  }
  &__champion-name {
    font-size: 1.4rem;
    text-align: center;
    color: $textgray;
    padding-top: 0.3rem;
    transition: all 0.3s;
  }
}
</style>