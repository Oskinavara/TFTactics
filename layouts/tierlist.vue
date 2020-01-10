<template>
  <div>
    <the-header />
    <div class="page">
      <div class="inner inner">
        <div class="sidebar sidebar">
          <page-heading>Lists</page-heading>
          <divider />
          <side-navbar :routes="routes" />
          <champion-filters v-if="championsPage" />

          <divider />
          <disclaimer />
        </div>
        <div class="main">
          <page-heading>
            {{`Teamfight Tactics ${pageHeading} Tier List`}}
            <template #content>
              <search-bar />
            </template>
          </page-heading>
          <divider></divider>
          <nuxt />
        </div>
      </div>
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '../components/organisms/TheHeader'
import TheFooter from '../components/organisms/TheFooter'
import ChampionFilters from '@/components/organisms/ChampionFilters.vue'
import SideNavbar from '@/components/organisms/SideNavbar.vue'
import Divider from '@/components/atoms/Divider.vue'
import Disclaimer from '@/components/atoms/Disclaimer.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'

export default {
  name: 'Tierlist',

  data() {
    return {
      routes: ['Champions', 'Team Comps', 'Origins', 'Classes', 'Items'],
      pageHeading: 'Champions'
    }
  },

  components: {
    ChampionFilters,
    SideNavbar,
    Divider,
    SearchBar,
    PageHeading,
    TheHeader,
    TheFooter,
    Disclaimer
  },

  computed: {
    championsPage() {
      return this.$route.path.includes('champions')
    }
  },

  updated() {
    this.pageHeading = this.$route.params.heading
  }
}
</script>

<style lang="scss" scoped>
</style>