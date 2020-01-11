<template>
  <div :class="['origin-counter', {'origin-counter--active': count() > 0}]">
    <div class="origin-counter__number">
      <span>{{count()}}</span>
    </div>
    <div class="origin-counter__icon-wrapper">
      <img :src="originUrl" :alt="originAlt" class="origin-counter__icon" />
    </div>
    <div class="origin-counter__bars">
      <div
        class="origin-counter__bar"
        v-for="bar in origin.bonuses"
        :style="{height: `calc((100% - ${origin.bonuses.length - 1} * 0.5rem) / ${origin.bonuses.length})`}"
      />
    </div>
  </div>
</template>

<script>
import iconUrls from '@/logic/iconUrls.js'
import { mapState } from 'vuex'

export default {
  mixins: [iconUrls],

  props: {
    origin: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapState(['team'])
  },

  methods: {
    count() {
      let count = 0
      this.team.forEach(champion =>
        champion.origin.includes(this.origin.name) ? count++ : ''
      )
      return count
    }
  }
}
</script>

<style lang="scss" scoped>
.origin-counter {
  display: flex;
  position: relative;

  &__number {
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
    height: 2rem;
    border: 1px solid $border-color;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $dark-blue;

    span {
      font-size: 1.4rem;
      color: $textwhite;
      line-height: 2rem;
      font-weight: 600;
      opacity: 0.25;
    }
  }

  &__icon-wrapper {
    background: $dark-gray;
    border: 1px solid $border-color;
    max-height: 6.4rem;
  }

  &__icon {
    padding: 1.5rem;
    opacity: 0.4;
  }

  &__bars {
    margin-left: 0.5rem;
  }

  &__bar {
    background: $dark-gray;
    border: 1px solid $border-color;
    width: 1.5rem;
    margin-bottom: 0.5rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &--active {
    .origin-counter {
      &__number {
        background: $gray;

        span {
          opacity: 1;
        }
      }

      &__icon {
        background: $dark-blue;
        opacity: 1;
      }
    }
  }
}
</style>