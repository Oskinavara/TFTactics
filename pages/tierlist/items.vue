<template>
  <div>
    <tier-block v-for="(tier, index) in tiers" :key="index" :tier="tier">
      <item-icon
        v-for="item in filterDataBySearch(tierlist.items[index])"
        :key="item"
        :item="items[item]"
      />
    </tier-block>
  </div>
</template>

<script>
import TierlistTemplate from '@/components/templates/TierlistTemplate.vue'
import TierBlock from '@/components/molecules/pages/TierBlock.vue'
import ItemIcon from '@/components/atoms/icons/ItemIcon.vue'
import searchLogic from '@/logic/searchLogic.js'
import filterChampions from '@/logic/filterChampions.js'
import { mapState } from 'vuex'

export default {
  name: 'TierlistItems',

  layout: 'tierlist',

  data() {
    return {
      tiers: ['s', 'a', 'b', 'c', 'd', '?']
    }
  },

  components: {
    TierlistTemplate,
    TierBlock,
    ItemIcon
  },

  computed: {
    ...mapState({
      items: state => state.apiData.items,
      tierlist: state => state.apiData.tierlist
    })
  },

  mixins: [searchLogic, filterChampions]
}
</script>
