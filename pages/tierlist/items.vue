<template>
  <tierlist-template :tiers="tiers" v-if="tierlist.items">
    <template #title>
      Teamfight Tactics Item Tier List
    </template>
    <tier-block 
      v-for="(tier, index) in tiers" 
      :key="index" 
      :tier="tier"
    >
      <item-icon 
        v-for="item in filterDataBySearch(tierlist.items[index])"
        :key="item" 
        :item="items[item]"
      />
    </tier-block>
  </tierlist-template>
</template>

<script>
import TierlistTemplate from '@/components/templates/TierlistTemplate.vue'
import TierBlock from '@/components/molecules/pages/TierBlock.vue'
import ItemIcon from '@/components/atoms/icons/ItemIcon.vue'
import searchLogic from '@/logic/searchLogic.js'
import filterChampions from '@/logic/filterChampions.js'

import { mapState } from 'vuex'

export default {
  data() {
    return {
      tiers: ['s', 'a', 'b', 'c', 'd', '?']
    }
  },
  components: {
    TierlistTemplate,
    TierBlock,
    ItemIcon,
  },
  computed: {
    ...mapState({
      items: state => state.apiData.items,
      tierlist: state => state.apiData.tierlist
    })  
  },
  mixins: [searchLogic, filterChampions],
}
</script>
