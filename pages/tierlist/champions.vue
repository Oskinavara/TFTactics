<template>
  <div class="tierlist-champions-page page">
    <div class="tierlist-champions-page__inner inner">
      <div class="tierlist-champions-page__sidebar sidebar">
        <page-heading>
          <template v-slot:text>Lists</template>
        </page-heading>
        <divider />
        <tierlist-side-navbar />
        <champion-filters />
        <divider />
        <disclaimer />
      </div>
      <div class="tierlist-champions-page__main">
        <page-heading>
          <template v-slot:text>Teamfight Tactics Champion Tier List</template>
          <template v-slot:content>
            <search-bar />
          </template>
        </page-heading>
        <divider></divider>
        <div class="tierlist-champions-page__tierlist">
          <tier-block v-for="(tier, index) in tiers" :key="index" :tier="tier">
            <template v-slot:tier>{{tier}}</template>
            <template v-slot:content>
              <champion-icon
                v-for="champion in tierlist.champions[index + 1]"
                :key="champion"
                :champion="champions[champion]"
              />
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
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'
import Disclaimer from '@/components/atoms/Disclaimer.vue'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      tiers: ['s', 'a', 'b', 'c', 'd', 'e']
    }
  },
  components: {
    ChampionFilters,
    TierlistSideNavbar,
    Divider,
    PageHeading,
    Disclaimer,
    TierBlock,
    ChampionIcon,
    SearchBar
  },
  computed: mapState(['champions', 'tierlist'])
}
</script>

<style lang="scss" scoped>
.tierlist-champions-page {
  &__main {
    width: calc(100% - 30rem);
    padding: 0 0 0 3rem;
    border-left: 1px solid $border-color;
  }
}
</style>