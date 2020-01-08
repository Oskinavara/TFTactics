<template>
  <div>
    <tier-block v-for="(tier, index) in tiers" :key="index" :tier="tier">
      <origin-icon
        v-for="origin in filterDataBySearch(tierlist.classes[index])"
        :key="origin"
        :origin="classes[origin]"
      />
    </tier-block>
  </div>
</template>

<script>
import TierBlock from '@/components/molecules/pages/TierBlock.vue'
import OriginIcon from '@/components/atoms/icons/OriginIcon.vue'
import filterChampions from '@/logic/filterChampions.js'
import searchLogic from '@/logic/searchLogic.js'
import { mapState } from 'vuex'

export default {
  name: 'TierlistClasses',

  layout: 'tierlist',

  data() {
    return {
      tiers: ['s', 'a', 'b', 'c', 'd']
    }
  },

  components: {
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
