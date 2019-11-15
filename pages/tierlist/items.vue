<template>
  <div class="tierlist-page page">
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
  </div>
</template>

<script>
import TierlistSideNavbar from '@/components/organisms/TierlistSideNavbar.vue'
import ChampionFilters from '@/components/organisms/ChampionFilters.vue'
import TierBlock from '@/components/molecules/pages/TierBlock.vue'
import Divider from '@/components/atoms/Divider.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'
import ItemIcon from '@/components/atoms/icons/ItemIcon.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'
import Disclaimer from '@/components/atoms/Disclaimer.vue'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      tiers: ['s', 'a', 'b', 'c', 'd', '?']
    }
  },
  components: {
    ChampionFilters,
    TierlistSideNavbar,
    Divider,
    PageHeading,
    Disclaimer,
    TierBlock,
    ItemIcon,
    SearchBar
  },
  computed: mapState(['items', 'tierlist'])
}
</script>

<style lang="scss" scoped>
.tierlist-page {
  &__main {
    width: calc(100% - 30rem);
    padding: 0 0 0 3rem;
    border-left: 1px solid $border-color;
  }
}
</style>