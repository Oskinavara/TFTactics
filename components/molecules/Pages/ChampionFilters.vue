<template>
  <div class="champion-filters">
    <div class="champion-filters__heading-wrapper">
      <h2 class="champion-filters__heading">Filters</h2>
      <base-button>Reset</base-button>
    </div>
    <ul class="champion-filters__filter-title">
      <li>
        <div class="champion-filters__filter-title-wrapper">
          <p>Cost</p>
          <img src="@/assets/icons/chevron.svg" alt="arrow" class="champion-filters__chevron-icon" />
        </div>
        <filter-list-item v-for="n in 5" :key="n">{{n}}</filter-list-item>
      </li>
      <li>
        <div class="champion-filters__filter-title-wrapper">
          <p>Origins</p>
          <img src="@/assets/icons/chevron.svg" alt="arrow" class="champion-filters__chevron-icon" />
        </div>
        <filter-list-item
          v-for="origin in originsArray"
          :key="origin"
          :icon="iconUrl(origin)"
        >{{origin}}</filter-list-item>
      </li>
      <li>
        <div class="champion-filters__filter-title-wrapper">
          <p>Classes</p>
          <img src="@/assets/icons/chevron.svg" alt="arrow" class="champion-filters__chevron-icon" />
        </div>
        <filter-list-item
          v-for="_class in classesArray"
          :key="_class"
          :icon="iconUrl(_class)"
        >{{_class}}</filter-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseButton from '@/components/atoms/BaseButton.vue'
import FilterListItem from '@/components/atoms/FilterListItem.vue'
import { mapState } from 'vuex'

export default {
  components: {
    BaseButton,
    FilterListItem
  },
  computed: {
    ...mapState(['classes', 'origins']),
    originsArray() {
      return Object.keys(this.origins)
    },
    classesArray() {
      return Object.keys(this.classes)
    }
  },
  methods: {
    iconUrl(origin) {
      return `https://rerollcdn.com/icons/${origin}.png`
    }
  },

  created() {
    // console.log(this.iconUrl('demon'))
  }
}
</script>

<style lang="scss" scoped>
.champion-filters {
  width: 30rem;
  margin-right: 3rem;
  margin: auto;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }
  &__chevron-icon {
    height: 1.1rem;
    width: 1.1rem;
  }
}
</style>