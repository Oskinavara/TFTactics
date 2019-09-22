<template>
  <li :class="['filter-list', {'filter-list--open' : isOpen}]">
    <div class="filter-list__wrapper" @click="openList">
      <p class="filter-list__title">{{name}}</p>
      <img src="@/assets/icons/chevron.svg" alt="arrow" class="filter-list__chevron-icon" />
    </div>
    <ul class="filter-list__list" :style="maxHeight">
      <filter-list-item
        v-for="item in content"
        :key="item"
        :iconSize="iconSize"
        :icon="iconUrl(item)"
      >{{item}}</filter-list-item>
    </ul>
  </li>
</template>

<script>
import FilterListItem from '@/components/atoms/FilterListItem.vue'
export default {
  components: {
    FilterListItem
  },
  data() {
    return {
      isOpen: false,
      listItemHeight: 45
    }
  },
  computed: {
    maxHeight() {
      return this.isOpen
        ? `max-height: ${parseInt(this.listItemHeight) * this.content.length}px`
        : ''
    }
  },
  methods: {
    iconUrl(item) {
      return typeof item == 'number'
        ? 'https://rerollcdn.com/ui/icon-gold.svg'
        : `https://rerollcdn.com/icons/${item}.png`
    },
    openList() {
      this.isOpen = !this.isOpen
      console.log(this.content.length * this.listItemHeight)
    }
  },
  mounted() {
    let li = document.querySelector('.filter-list-item')
    let compStyles = window.getComputedStyle(li)
    this.listItemHeight = compStyles.getPropertyValue('height')
  },
  props: {
    name: {
      type: String,
      required: true
    },
    content: {
      type: Array,
      required: true
    },
    iconSize: {
      type: Number,
      default: 24
    },
    icon: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-list {
  &__wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    margin: 0.8rem 0;
    cursor: pointer;
    @include blue-rect;
  }
  &__title {
    text-transform: capitalize;
    transition: all 0.4s;
  }
  &__list {
    max-height: 0;
    transition: all 0.4s;
    overflow: hidden;
  }
  &__chevron-icon {
    height: 1.1rem;
    width: 1.1rem;
    transform: rotate(180deg);
    transition: all 0.4s;
  }
  &--open {
    .filter-list {
      &__title {
        color: $textwhite;
      }
      &__chevron-icon {
        transform: rotate(0);
      }
      &__wrapper::before {
        transform: scaleX(1);
      }
      &__title {
        transform: translateX(2rem);
      }
    }
  }
}
</style>