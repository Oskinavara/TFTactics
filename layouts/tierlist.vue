<template>
  <div>
    <TheHeader />
    <div class="page">
      <transition name="fade">
        <MobileMenu v-if="menuOpened"></MobileMenu>
      </transition>
      <div class="inner">
        <div class="sidebar">
          <PageHeading>Lists</PageHeading>
          <Divider />
          <SideNavbar :routes="routes" />
          <ChampionFilters v-if="championsPage" />

          <Divider />
          <Disclaimer />
        </div>
        <div class="main">
          <PageHeading>
            {{ `Teamfight Tactics ${pageHeading} Tier List` }}
            <template #content>
              <SearchBar />
            </template>
          </PageHeading>
          <Divider />
          <nuxt />
        </div>
      </div>
    </div>
    <TheFooter />
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
import layoutLogic from '@/logic/layoutLogic.js'

export default {
  name: 'Tierlist',

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

  mixins: [layoutLogic],

  data() {
    return {
      routes: ['Champions', 'Team Comps', 'Origins', 'Classes', 'Items'],
      pageHeading: 'Champions'
    }
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
