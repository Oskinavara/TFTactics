<template>
  <page-template :tiers="tiers">
    <tier-block 
      v-for="(tier, index) in tiers" 
      :key="index" 
      :tier="tier"
    >
      <item-icon 
        v-for="item in tierlist.items[index + 1]"
        :key="item" 
        :item="items[item]"
      />
    </tier-block>
  </page-template>
</template>

<script>
import PageTemplate from '@/components/templates/PageTemplate.vue'
import TierBlock from '@/components/molecules/pages/TierBlock.vue'
import ItemIcon from '@/components/atoms/icons/ItemIcon.vue'
import searchLogic from '@/logic/searchLogic.js'


import { mapState } from 'vuex'

export default {
  data() {
    return {
      tiers: ['s', 'a', 'b', 'c', 'd', '?']
    }
  },
  components: {
    PageTemplate,
    TierBlock,
    ItemIcon,
  },
  computed: mapState(['items', 'tierlist']),
  // mixins: [searchLogic(this.items)],
}
</script>
