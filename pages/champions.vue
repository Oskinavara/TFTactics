<template>
  <div class="champions-page">
    <div class="champions-page__inner">
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
  </div>
</template>

<script>
import PageHeading from '@/components/atoms/PageHeading.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'
import ChampionIcon from '@/components/atoms/ChampionIcon.vue'
import ChampionFilters from '@/components/organisms/ChampionFilters.vue'

import { mapState } from 'vuex'
export default {
  components: {
    PageHeading,
    SearchBar,
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
  &__inner {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
  &__wrapper {
    padding: 0 0 0 3rem;
    border-left: 1px solid $border-color;
  }
  &__heading-wrapper {
    padding-bottom: 2rem;
    display: flex;
    justify-content: space-between;
  }
  &__champion-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9.4rem, 3fr));
    border-top: 1px solid $border-color;
    padding-top: 2rem;
    width: 83rem;
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