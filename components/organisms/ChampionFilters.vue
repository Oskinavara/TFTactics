<template>
  <div class="champion-filters">
    <PageHeading>
      <template>Filters</template>
      <template #content>
        <BaseButton @click="clearFilters">Reset</BaseButton>
      </template>
    </PageHeading>
    <Divider />
    <ul class="champion-filters__filter-title">
      <FilterList name="cost" :content="costArray" :icon-size="15" />
      <FilterList name="origin" :content="originArray" />
      <FilterList name="class" :content="classArray" />
    </ul>
  </div>
</template>

<script>
import BaseButton from '@/components/atoms/BaseButton.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'
import Divider from '@/components/atoms/Divider.vue'
import FilterList from '@/components/molecules/Pages/FilterList.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ChampionsFilters',

  components: {
    BaseButton,
    FilterList,
    PageHeading,
    Divider
  },

  computed: {
    ...mapGetters(['costArray', 'originArray', 'classArray'])
  },

  methods: {
    clearFilters() {
      this.$store.dispatch('initFilters')
    }
  }
}
</script>

<style lang="scss" scoped>
.champion-filters {
  width: 100%;
  margin: 0 2rem 0 0;
  @include media-l {
    display: none;
  }

  &__filter-title {
    color: $textgray;
    list-style: none;
    font-size: 1.6rem;
  }
}
</style>
