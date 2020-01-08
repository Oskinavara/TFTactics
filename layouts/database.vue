<template>
  <div>
    <the-header />
    <div class="page">
      <div class="inner inner">
        <div class="sidebar sidebar">
          <page-heading>Lists</page-heading>
          <divider />
          <side-navbar parentRoute="db" :routes="routes" />
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
import SideNavbar from '../components/organisms/SideNavbar'
import PageHeading from '@/components/atoms/PageHeading.vue'
import Divider from '@/components/atoms/Divider.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    PageHeading,
    Divider,
    SearchBar,
    SideNavbar
  },

  data() {
    return {
      routes: ['Champions', 'Champion Stats', 'Origins', 'Classes', 'Items'],
      pageHeading: 'Champions'
    }
  },

  updated() {
    this.pageHeading = this.$route.params.heading
  }
}
</script>

<style lang="scss">
.database-description {
  line-height: 2em;
  margin: 2rem 0;
}
</style>