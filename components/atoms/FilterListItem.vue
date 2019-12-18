<template>
  <li 
    @click="applyFilter(item)"
    :class="['filter-list-item', {'filter-list-item--active' : isActive(item)}]" 
  >
    <img :src="icon" alt="gold icon" class="filter-list-item__icon" v-size="iconSize" />
    <p class="filter-list-item__text">
      <slot></slot>
    </p>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'https://rerollcdn.com/ui/icon-gold.svg'
    },
    iconSize: {
      type: Number,
      default: 24
    },
    item: {
      type: [Number, String],
      required: true
    }
  },
  methods: {
    applyFilter(filter) {
      this.$store.dispatch('toggleFilter', filter)
    },
    isActive(filter) {
      let filters = this.$store.state.filters
      for(let category in filters){
        if(filters[category].includes(filter)){
          return true
        }  
      }
      return false
    }
  },

}
</script>

<style lang="scss" scoped>
.filter-list-item {
  list-style: none;
  position: relative;
  width: 30rem;
  padding: 0.55rem 0;
  cursor: pointer;
  &:first-of-type {
    padding-top: 1.2rem;
  }
  &::after {
    content: '';
    display: block;
    height: 1.2rem;
    width: 1.2rem;
    position: absolute;
    background: transparent;
    border-radius: 50%;
    border: 2px solid hsla(0,0%,100%,.25);
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    transition: all 0.3s;
  }
  &:hover {
    &::after {
      border: 2px solid $textgray;
    }
  }
  &--active{
    &::after{
      border: 2px solid $lightblue;
      background-color: $lightblue;
    }    
    &:hover{
      &::after{
        border: 2px solid $lightblue;
      }
    }

    .filter-list-item__icon{
      opacity: 1;
    }
  }

  &__icon {
    height: 1.35rem;
    width: 1.5rem;
    opacity: 0.54;
    margin-right: 1rem;
    transition: all 0.3s;
  }

  &__text {
    display: inline-block;
    position: relative;
    bottom: 0.5rem;
    font-weight: 400;
    color: $textwhite;
    line-height: 2rem;
    text-transform: capitalize;
  }
}
</style>