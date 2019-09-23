<template>
  <div class="champions-page page">
    <div class="champions-page__inner inner">
      <div class="champions-page__sidebar sidebar">
        <champion-filters></champion-filters>
      </div>
      <div class="champions-page__wrapper">
        <page-heading>
          <template v-slot:text>Teamfight Tactics Champions List</template>
          <template v-slot:content>
            <search-bar></search-bar>
          </template>
        </page-heading>
        <divider />
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
import Divider from '@/components/atoms/Divider.vue'
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'
import ChampionFilters from '@/components/organisms/ChampionFilters.vue'

import { mapState } from 'vuex'
export default {
  components: {
    PageHeading,
    SearchBar,
    ChampionIcon,
    ChampionFilters,
    Divider
  },
  computed: mapState(['champions'])
}
</script>

<style lang="scss" scoped>
.champions-page {
  &__wrapper {
    padding: 0 0 0 3rem;
    border-left: 1px solid $border-color;
  }

  &__champion-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9.4rem, 3fr));
    padding-top: 2rem;
    width: 83rem;
  }
  &__champion-block {
    margin-bottom: 3rem;
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
  }
}
</style>