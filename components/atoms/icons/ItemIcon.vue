<template>
  <div class="item-icon">
    <img
      @mouseover="toggleHover"
      @mouseleave="toggleHover"
      :src="itemUrl"
      :alt="itemAlt"
      :class="['item-icon__image']"
    />
    <item-tooltip v-show="hover" :item="item" />
  </div>
</template>

<script>
import ItemTooltip from '@/components/atoms/tooltips/ItemTooltip.vue'
import iconUrls from '@/logic/iconUrls.js'
<<<<<<< HEAD
=======
import showTooltip from '@/logic/showTooltip.js'
>>>>>>> master

export default {
  name: 'ItemIcon',

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  mixins: [iconUrls, showTooltip],

  components: {
    ItemTooltip
<<<<<<< HEAD
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
=======
>>>>>>> master
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

    &:hover {
      border: 1px solid $orange-accent;
    }
  }
}
</style>