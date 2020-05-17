<template>
  <div>
    <TierBlock v-for="(tier, index) in tiers" :key="index" :tier="tier">
      <OriginIcon
        v-for="origin in filterDataBySearch(tierlist.classes[index])"
        :key="origin"
        :origin="classes[origin]"
      />
    </TierBlock>
  </div>
</template>

<script>
import TierBlock from '@/components/molecules/Pages/TierBlock.vue'
import OriginIcon from '@/components/atoms/icons/OriginIcon.vue'
import filterChampions from '@/logic/filterChampions.js'
import searchLogic from '@/logic/searchLogic.js'
import { mapState } from 'vuex'

export default {
  name: 'TierlistClasses',

  layout: 'tierlist',

  components: {
    TierBlock,
    OriginIcon
  },

  mixins: [searchLogic, filterChampions],

  data() {
    return {
      tiers: ['s', 'a', 'b', 'c', 'd']
    }
  },

  computed: mapState({
    classes: state => state.apiData.classes,
    tierlist: state => state.apiData.tierlist
  })
}
</script>
