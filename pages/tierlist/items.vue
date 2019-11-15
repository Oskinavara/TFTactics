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
  <!-- <div class="tierlist-page page">
    <div class="tierlist-page__inner inner">
      <div class="tierlist-page__sidebar sidebar">
        <page-heading>
          <template v-slot:text>Lists</template>
        </page-heading>
        <divider />
        <tierlist-side-navbar />
        <divider />
        <disclaimer />
      </div>
      <div class="tierlist-page__main">
        <page-heading>
          <template v-slot:text>Teamfight Tactics Item Tier List</template>
          <template v-slot:content>
            <search-bar />
          </template>
        </page-heading>
        <divider></divider>
        <div class="tierlist-page__tierlist">
          <tier-block v-for="(tier, index) in tiers" :key="index" :tier="tier">
            <template v-slot:tier>{{tier}}</template>
            <template v-slot:content>
              <item-icon v-for="item in tierlist.items[index + 1]" :key="item" :item="items[item]" />
            </template>
          </tier-block>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import PageTemplate from '@/components/templates/PageTemplate.vue'
import TierBlock from '@/components/molecules/pages/TierBlock.vue'
import ItemIcon from '@/components/atoms/icons/ItemIcon.vue'

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
  computed: mapState(['items', 'tierlist'])
}
</script>
