<template>
  <div class="database-page page">
    <div class="database-page__inner inner">
      <div class="database-page__sidebar sidebar">
        <page-heading>Database</page-heading>
        <divider />
        <side-navbar :routes="routes" />
      </div>
      <div class="database-page__main">
        <page-heading>
          <slot name="title" />
          <template #content>
            <search-bar />
          </template>
        </page-heading>
        <divider></divider>
        <div class="database-page__tierlist">
          <p class="database-page__description">
            <slot name="description" />
          </p>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavbar from '@/components/organisms/SideNavbar.vue'
import Divider from '@/components/atoms/Divider.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'
import OriginIcon from '@/components/atoms/icons/OriginIcon.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'

export default {
  name: 'TierlistTemplate',

  data() {
    return {
      routes: ['Champions', 'Champion Stats', 'Origins', 'Classes', 'Items']
    }
  },

  components: {
    SideNavbar,
    Divider,
    SearchBar,
    OriginIcon,
    PageHeading
  }
}
</script>

<style lang="scss">
.database-page {
  &__main {
    width: calc(100% - 30rem);
    padding: 0 0 0 3rem;
    border-left: 1px solid $border-color;
  }

  &__description {
    line-height: 2em;
    margin: 2rem 0;
  }

  .champion-icon {
    height: 4rem;
    width: 4rem;
  }
}
</style>