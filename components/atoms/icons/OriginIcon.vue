<template>
  <div class="origin-icon">
    <img :src="originUrl" :alt="originAlt" class="origin-icon__image" />
    <p class="origin-icon__text">{{origin ? origin.name : ''}}</p>
    <origin-tooltip :origin="origin" />
  </div>
</template>

<script>
import OriginTooltip from '@/components/atoms/tooltips/OriginTooltip.vue'
import iconUrls from '@/logic/iconUrls.js'

export default {
  name: 'OriginIcon',

  components: {
    OriginTooltip
  },

  mixins: [iconUrls],

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
  }

  &__text {
    text-align: center;
    font-size: 1.4rem;
    color: $textgray;
  }

  &:hover {
    .origin-tooltip {
      display: block;
    }
  }
}
</style>