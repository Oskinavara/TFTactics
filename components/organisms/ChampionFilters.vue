<template>
  <div class="champion-filters">
    <div class="champion-filters__heading-wrapper">
      <h2 class="champion-filters__heading">Filters</h2>
      <base-button>Reset</base-button>
    </div>
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
import FilterList from '@/components/molecules/pages/FilterList.vue'
import { mapState } from 'vuex'

export default {
  components: {
    BaseButton,
    FilterList
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
  width: 30rem;
  margin: 0 3rem 0 0;
  &__heading-wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    border-bottom: 1px solid $border-color;
  }
  &__heading {
    color: $textwhite;
    font-family: 'Sofia Pro Light';
  }
  &__filter-title {
    color: $textgray;
    list-style: none;
    font-size: 1.6rem;
  }
  &__filter-title-wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      background: $lightblue;
      height: 100%;
      width: 0.4rem;
    }
  }
  &__list {
    max-height: 0;
    transition: all 0.5s;
    overflow: hidden;
    &--open {
      max-height: 61rem;
      &-short {
        max-height: 20rem;
      }
    }
  }
  &__chevron-icon {
    height: 1.1rem;
    width: 1.1rem;
    transform: rotate(180deg);
    transition: all 0.3s;
    &--rotated {
      transform: rotate(0);
    }
  }
}
</style>