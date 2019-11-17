<template>
  <page-template :tiers="tiers">
    <template v-slot:championFilters>
      <champion-filters/>
    </template>
    <tier-block 
      v-for="(tier, index) in tiers" 
      :key="index" 
      :tier="tier"
    >
      <champion-icon
        v-for="champion in filteredChampions(index)"
        :key="champion"
        :champion="champions[champion]"
      />
    </tier-block>
  </page-template>
</template>

<script>
import PageTemplate from '@/components/templates/PageTemplate.vue'
import TierBlock from '@/components/molecules/pages/TierBlock.vue'
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'
import ChampionFilters from '@/components/organisms/ChampionFilters.vue'
import searchLogic from '@/logic/searchLogic.js'

import { mapState } from 'vuex'

export default {
  data() {
    return {
      tiers: ['s', 'a', 'b', 'c', 'd', 'e']
    }
  },
  components: {
    PageTemplate,
    TierBlock,
    ChampionIcon,
    ChampionFilters
  },
  computed: {
    ...mapState(['champions', 'tierlist']),
    
  },
  methods: {
    filteredChampions(index) {
      if(this.inputValue === ''){
        return this.tierlist.champions[index + 1];
      }
      // let filteredChampions = this.tierlist.champions;
      // filteredChampions.shift();
      // for(tier in filteredChampions){
      //   tier.filter(champion => champion.includes(this.inputValue))
      // }
      // return filteredChampions
    }
  },
  mixins: [searchLogic],
}
</script>
