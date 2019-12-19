<template>
  <div class="champion-filters">
    <page-heading>
      <template>Filters</template>
      <template #content>
        <base-button>Reset</base-button>
      </template>
    </page-heading>
    <divider />
    <ul class="champion-filters__filter-title">
      <filter-list name="cost" :content="costArray" :iconSize="15" />
      <filter-list name="origin" :content="originArray" />
      <filter-list name="class" :content="classArray" />
    </ul>
  </div>
</template>

<script>
import BaseButton from '@/components/atoms/BaseButton.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'
import Divider from '@/components/atoms/Divider.vue'
import FilterList from '@/components/molecules/pages/FilterList.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    BaseButton,
    FilterList,
    PageHeading,
    Divider
  },
  computed: {
    ...mapGetters([
      'costArray', 
      'originArray', 
      'classArray'
    ])
  },
}
</script>

<style lang="scss" scoped>
.champion-filters {
  width: 100%;
  margin: 0 2rem 0 0;

  &__filter-title {
    color: $textgray;
    list-style: none;
    font-size: 1.6rem;
  }
}
</style>