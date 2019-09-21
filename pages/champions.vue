<template>
  <div class="champions-page">
    <div class="champions-page__heading-wrapper">
      <page-heading>Teamfight Tactics Champions List</page-heading>
      <search-bar></search-bar>
    </div>
  </div>
</template>

<script>
import PageHeading from '@/components/atoms/PageHeading.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'
import ChampionIcon from '@/components/atoms/ChampionIcon.vue'
export default {
  components: {
    PageHeading,
    SearchBar,
    ChampionIcon
  }
}
</script>

<style lang="scss" scoped>
.champions-page {
  background: $gray;
  padding: 3rem 0 0;
  &__heading-wrapper {
    margin: auto;
    width: 40%;
    display: flex;
    justify-content: space-between;
  }
}
</style>