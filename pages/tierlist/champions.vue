<template>
  <div>
    <FilterTags />
    <TierBlock v-for="(tier, index) in tiers" :key="index" :tier="tier">
      <ChampionIcon
        v-for="champion in filteredChampions(tierlist.champions[index])"
        :key="champion"
        :champion="champions[champion]"
      />
    </TierBlock>
  </div>
</template>

<script>
import TierBlock from '@/components/molecules/Pages/TierBlock.vue'
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'
import ChampionFilters from '@/components/organisms/ChampionFilters.vue'
import searchLogic from '@/logic/searchLogic.js'
import filterChampions from '@/logic/filterChampions.js'
import FilterTags from '@/components/molecules/FilterTags.vue'
import { mapState } from 'vuex'

export default {
  name: 'TierlistChampions',

  layout: 'tierlist',

  components: {
    TierBlock,
    ChampionIcon,
    ChampionFilters,
    FilterTags
  },

  data() {
    return {
      tiers: ['s', 'a', 'b', 'c', 'd', 'e'],
      filterTags: [1, 2, 3, 4]
    }
  },

  computed: {
    ...mapState({
      champions: state => state.apiData.champions,
      tierlist: state => state.apiData.tierlist,
      filters: state => state.filters
    })
  },

  mixins: [searchLogic, filterChampions]
}
</script>
