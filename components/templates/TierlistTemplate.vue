<template>
  <div class="tierlist-page page">
    <div class="tierlist-page__inner inner">
      <div class="tierlist-page__sidebar sidebar">
        <page-heading>Lists</page-heading>
        <divider />
        <side-navbar :routes="routes" />
        <slot name="championFilters"></slot>
        <divider />
        <disclaimer />
      </div>
      <div class="tierlist-page__main">
        <page-heading>
          <slot name="title" />
          <template #content>
            <search-bar />
          </template>
        </page-heading>
        <divider></divider>
        <div class="tierlist-page__tierlist">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavbar from '@/components/organisms/SideNavbar.vue'
import ChampionFilters from '@/components/organisms/ChampionFilters.vue'
import TierBlock from '@/components/molecules/pages/TierBlock.vue'
import Divider from '@/components/atoms/Divider.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'
import OriginIcon from '@/components/atoms/icons/OriginIcon.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'
import Disclaimer from '@/components/atoms/Disclaimer.vue'
import { mapState } from 'vuex'

export default {
  name: 'TierlistTemplate',

  data() {
    return {
      routes: ['Champions', 'Team Comps', 'Origins', 'Classes', 'Items']
    }
  },

  props: {
    tiers: {
      type: Array,
      required: true
    }
  },

  components: {
    ChampionFilters,
    SideNavbar,
    Divider,
    PageHeading,
    Disclaimer,
    TierBlock,
    OriginIcon,
    SearchBar
  }
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