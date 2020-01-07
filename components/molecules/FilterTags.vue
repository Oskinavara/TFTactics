<template>
  <div class="filter-tags">
    <div
      v-for="tag in filterArray"
      :key="tag"
      class="filter-tags__block"
      @click="removeFilter(tag)"
    >
      <span class="filter-tags__text">{{tag}}</span>
      <button class="filter-tags__button">
        <img
          src="https://rerollcdn.com/close-icon.svg"
          alt="close button"
          class="filter-tags__close"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FilterTags',

  computed: {
    ...mapState(['filters']),
    filterArray() {
      let filterArray = []
      for (let filterType in this.filters) {
        filterArray.push(this.filters[filterType])
      }
      return filterArray.flat()
    }
  },

  methods: {
    removeFilter(filter) {
      this.$store.dispatch('toggleFilter', filter)
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-tags {
  display: flex;

  &__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    background: $orange-accent;
    padding: 0 1.5rem;
    margin: 2rem 0.5rem 1rem;
    width: calc(25% - 1rem);
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background: $orange-accent--light;
    }
  }

  &__text {
    color: $white;
    font-size: 1.4rem;
    text-transform: capitalize;
    font-weight: 600;
  }

  &__button {
    height: 1.4rem;
    min-width: 1.4rem;
    background: transparent;
    border: 0;
    cursor: pointer;
  }
}
</style>