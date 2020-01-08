<template>
  <div>
    <the-header />
    <div class="page">
      <div class="inner inner">
        <div class="sidebar sidebar">
          <page-heading>Lists</page-heading>
          <divider />
          <side-navbar :routes="routes" />
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
import PageHeading from '@/components/atoms/PageHeading.vue'
import Divider from '@/components/atoms/Divider.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    PageHeading,
    Divider,
    SearchBar
  },

  data() {
    return {
      routes: ['Champions', 'Champion Stats', 'Origins', 'Classes', 'Items'],
      pageHeading: ''
    }
  },

  updated() {
    this.pageHeading = this.$route.params.heading
  }
}
</script>

<style lang="scss" scoped>
</style>