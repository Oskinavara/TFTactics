<template>
  <div />
</template>

<script>
import SideNavbar from '@/components/organisms/SideNavbar.vue'
import ChampionFilters from '@/components/organisms/ChampionFilters.vue'
import Divider from '@/components/atoms/Divider.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'
import Disclaimer from '@/components/atoms/Disclaimer.vue'

export default {
  name: 'TierlistTeamComps',

  layout: 'tierlist',

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