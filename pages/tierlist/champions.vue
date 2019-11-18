<template>
  <tierlist-template :tiers="tiers" v-if="tierlist.champions">
    <template v-slot:title>
      Teamfight Tactics Champion Tier List
    </template>
    <template v-slot:championFilters>
      <champion-filters />
    </template>
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

import { mapState } from 'vuex'

export default {
  data() {
    return {
      tiers: ['s', 'a', 'b', 'c', 'd', 'e']
    }
  },
  components: {
    TierlistTemplate,
    TierBlock,
    ChampionIcon,
    ChampionFilters
  },
  computed: {
    ...mapState({
      champions: state => state.apiData.champions, 
      tierlist: state => state.apiData.tierlist,
      filters: state => state.filters   
    })
  },
  mixins: [searchLogic, filterChampions],
}
</script>
