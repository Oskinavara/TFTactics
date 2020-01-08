<template>
  <div class="origin-icon">
<<<<<<< HEAD
    <img :src="originUrl" :alt="originAlt" class="origin-icon__image" />
    <p class="origin-icon__text">{{origin ? origin.name : ''}}</p>
    <origin-tooltip :origin="origin" />
=======
    <img
      @mouseover="toggleHover"
      @mouseleave="toggleHover"
      :src="originUrl"
      :alt="originAlt"
      class="origin-icon__image"
    />
    <p class="origin-icon__text">{{origin ? origin.name : ''}}</p>
    <origin-tooltip v-show="hover" :origin="origin" />
>>>>>>> master
  </div>
</template>

<script>
import OriginTooltip from '@/components/atoms/tooltips/OriginTooltip.vue'
import iconUrls from '@/logic/iconUrls.js'
import showTooltip from '@/logic/showTooltip.js'

export default {
  name: 'OriginIcon',

  components: {
    OriginTooltip
  },

<<<<<<< HEAD
  mixins: [iconUrls],
=======
  mixins: [iconUrls, showTooltip],
>>>>>>> master

  props: {
    origin: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.origin-icon {
  height: 5.35rem;
  width: 9rem;
  margin: auto;
  position: relative;

  &__image {
    height: 3rem;
    width: 3rem;
    text-align: center;
    transition: all 0.3s;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid transparent;
  }

  &__text {
    text-align: center;
    font-size: 1.4rem;
    color: $textgray;
  }
<<<<<<< HEAD

  &:hover {
    .origin-tooltip {
      display: block;
    }
  }
=======
>>>>>>> master
}
</style>