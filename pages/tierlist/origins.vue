<template>
  <tierlist-template :tiers="tiers" v-if="tierlist.origins">
    <template #title>Teamfight Tactics Origin Tier List</template>
    <tier-block v-for="(tier, index) in tiers" :key="index" :tier="tier">
      <origin-icon
        v-for="origin in filterDataBySearch(tierlist.origins[index])"
        :key="origin"
        :origin="origins[origin]"
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
  name: 'TierlistOrigins',

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
    origins: state => state.apiData.origins,
    tierlist: state => state.apiData.tierlist
  }),

  mixins: [searchLogic, filterChampions]
}
</script>
