<template>
  <div class="tierlist-champions-page page">
    <div class="tierlist-champions-page__inner inner">
      <div class="tierlist-champions-page__sidebar sidebar">
        <page-heading>Lists</page-heading>
        <divider />
        <tierlist-side-navbar />
        <divider />
        <disclaimer />
      </div>
    </div>
  </div>
</template>

<script>
import TierlistSideNavbar from '@/components/organisms/TierlistSideNavbar.vue'
import ChampionFilters from '@/components/organisms/ChampionFilters.vue'
import Divider from '@/components/atoms/Divider.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'
import Disclaimer from '@/components/atoms/Disclaimer.vue'

export default {
  components: {
    ChampionFilters,
    TierlistSideNavbar,
    Divider,
    PageHeading,
    Disclaimer
  }
}
</script>

<style lang="scss" scoped>
</style>