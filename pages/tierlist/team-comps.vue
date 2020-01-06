<template>
  <div class="tierlist-page page">
    <div class="tierlist-page__inner inner">
      <div class="tierlist-page__sidebar sidebar">
        <page-heading>
          Lists
        </page-heading>
        <divider />
        <side-navbar />
        <divider />
        <disclaimer />
      </div>
    </div>
  </div>
</template>

<script>
import SideNavbar from '@/components/organisms/SideNavbar.vue'
import ChampionFilters from '@/components/organisms/ChampionFilters.vue'
import Divider from '@/components/atoms/Divider.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'
import Disclaimer from '@/components/atoms/Disclaimer.vue'

export default {
  components: {
    ChampionFilters,
    SideNavbar,
    Divider,
    PageHeading,
    Disclaimer
  }
}
</script>

<style lang="scss" scoped>
</style>