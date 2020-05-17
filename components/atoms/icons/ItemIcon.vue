<template>
  <div class="item-icon">
    <img
      :src="itemUrl"
      :alt="itemAlt"
      :class="['item-icon__image']"
      @mouseover="toggleHover"
      @mouseleave="toggleHover"
    />
    <ItemTooltip v-show="hover" :item="item" />
  </div>
</template>

<script>
import ItemTooltip from '@/components/atoms/tooltips/ItemTooltip.vue'
import iconUrls from '@/logic/iconUrls.js'
import showTooltip from '@/logic/showTooltip.js'

export default {
  name: 'ItemIcon',

  components: {
    ItemTooltip
  },

  mixins: [iconUrls, showTooltip],

  props: {
    item: {
      type: Object,
      required: true
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

    &:hover {
      border: 1px solid $orange-accent;
    }
  }
}
</style>
