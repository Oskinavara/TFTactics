<template>
  <div class="item-icon">
    <img
      @mouseover="toggleHover"
      @mouseleave="toggleHover"
      :src="itemUrl"
      :alt="itemAlt"
      :class="['item-icon__image',  hover ? 'border-active' : '']"
    />
    <item-tooltip v-show="hover" :item="item" />
  </div>
</template>

<script>
import ItemTooltip from '@/components/atoms/tooltips/ItemTooltip.vue'
import iconUrls from '@/logic/iconUrls.js'

export default {
  name: 'ItemIcon',

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  mixins: [iconUrls],

  components: {
    ItemTooltip
  },

  data() {
    return {
      hover: false
    }
  },

  methods: {
    toggleHover() {
      this.hover = !this.hover
    }
  }
}
</script>

<style lang="scss" scoped>
.item-icon {
  height: 4.5rem;
  width: 4.5rem;
  margin: auto;
  position: relative;
  cursor: pointer;

  &__image {
    height: 100%;
    width: 100%;
    transition: all 0.3s;
    border: 1px solid $border-color;
  }
}

.border-active {
  border: 1px solid $orange-accent !important;
}
</style>