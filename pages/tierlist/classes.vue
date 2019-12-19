<template>
  <tierlist-template :tiers="tiers" v-if="tierlist.classes">
    <template #title>
      Teamfight Tactics Class Tier List
    </template>
    <tier-block 
      v-for="(tier, index) in tiers" 
      :key="index" 
      :tier="tier"
    >
      <origin-icon
        v-for="origin in filterDataBySearch(tierlist.classes[index])"
        :key="origin"
        :origin="classes[origin]"
      />
    </tier-block>
  </tierlist-template>
</template>

<script>
import TierlistTemplate from '@/components/templates/TierlistTemplate.vue'
import TierBlock from '@/components/molecules/pages/TierBlock.vue'
import OriginIcon from '@/components/atoms/icons/OriginIcon.vue'
import filterChampions from '@/logic/filterChampions.js'
import searchLogic from '@/logic/searchLogic.js'

import { mapState } from 'vuex'

export default {
  data() {
    return {
      tiers: ['s', 'a', 'b', 'c', 'd']
    }
  },
  components: {
    TierlistTemplate,
    TierBlock,
    OriginIcon
  },
  computed: mapState({
    classes: state => state.apiData.classes,
    tierlist: state => state.apiData.tierlist
  }),
  mixins: [searchLogic, filterChampions]
}
</script>
