<template>
  <div class="champion-filters">
    <div class="champion-filters__heading-wrapper">
      <page-heading>Filters</page-heading>
      <base-button>Reset</base-button>
    </div>
    <divider />
    <ul class="champion-filters__filter-title">
      <filter-list name="cost" :content="costArray" :iconSize="15" />
      <filter-list name="origin" :content="originsArray" />
      <filter-list name="class" :content="classesArray" />
    </ul>
  </div>
</template>

<script>
import BaseButton from '@/components/atoms/BaseButton.vue'
import FilterListItem from '@/components/atoms/FilterListItem.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'
import Divider from '@/components/atoms/Divider.vue'
import FilterList from '@/components/molecules/pages/FilterList.vue'
import { mapState } from 'vuex'

export default {
  components: {
    BaseButton,
    FilterList,
    PageHeading,
    Divider
  },
  data() {
    return {
      costArray: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    ...mapState(['classes', 'origins']),
    originsArray() {
      return Object.keys(this.origins)
    },
    classesArray() {
      return Object.keys(this.classes)
    }
  }
}
</script>

<style lang="scss" scoped>
.champion-filters {
  width: 100%;
  margin: 0 2rem 0 0;
  &__heading-wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__filter-title {
    color: $textgray;
    list-style: none;
    font-size: 1.6rem;
  }
}
</style>