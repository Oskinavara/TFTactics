<template>
  <page-template :tiers="tiers">
    <tier-block 
      v-for="(tier, index) in tiers" 
      :key="index" 
      :tier="tier"
    >
      <origin-icon
        v-for="origin in tierlist.classes[index + 1]"
        :key="origin"
        :origin="classes[origin]"
      />
    </tier-block>
  </page-template>
</template>

<script>
import PageTemplate from '@/components/templates/PageTemplate.vue'
import TierBlock from '@/components/molecules/pages/TierBlock.vue'
import OriginIcon from '@/components/atoms/icons/OriginIcon.vue'

import { mapState } from 'vuex'

export default {
  data() {
    return {
      tiers: ['s', 'a', 'b', 'c', 'd']
    }
  },
  components: {
    PageTemplate,
    TierBlock,
    OriginIcon
  },
  computed: mapState(['classes', 'tierlist'])
}
</script>
