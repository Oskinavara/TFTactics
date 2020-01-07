<template>
  <tierlist-template :tiers="tiers" v-if="tierlist.champions">
    <template #title>Teamfight Tactics Champion Tier List</template>
    <template #championFilters>
      <champion-filters />
    </template>
    <filter-tags />
    <tier-block v-for="(tier, index) in tiers" :key="index" :tier="tier">
      <champion-icon
        v-for="champion in filteredChampions(tierlist.champions[index])"
        :key="champion"
        :champion="champions[champion]"
      />
    </tier-block>
  </tierlist-template>
</template>

<script>
import TierlistTemplate from '@/components/templates/TierlistTemplate.vue'
import TierBlock from '@/components/molecules/pages/TierBlock.vue'
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'
import ChampionFilters from '@/components/organisms/ChampionFilters.vue'
import searchLogic from '@/logic/searchLogic.js'
import filterChampions from '@/logic/filterChampions.js'
import FilterTags from '@/components/molecules/FilterTags.vue'
import { mapState } from 'vuex'

export default {
  name: 'TierlistChampions',

  data() {
    return {
      tiers: ['s', 'a', 'b', 'c', 'd', 'e'],
      filterTags: [1, 2, 3, 4]
    }
  },

  components: {
    TierlistTemplate,
    TierBlock,
    ChampionIcon,
    ChampionFilters,
    FilterTags
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
