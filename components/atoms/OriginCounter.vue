<template >
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
        v-for="(bar, index) in origin.bonuses"
        :style="{height: `calc((100% - ${origin.bonuses.length - 1} * 0.5rem) / ${origin.bonuses.length})`}"
        :class="{'origin-counter__bar--full': bonusReached(index)}"
      />
    </div>
    <origin-tooltip :origin="origin" :isTeamBuilder="true" :count="count()" />
  </div>
</template>

<script>
import OriginTooltip from '@/components/atoms/tooltips/OriginTooltip.vue'
import iconUrls from '@/logic/iconUrls.js'
import { mapState } from 'vuex'

export default {
  mixins: [iconUrls],

  props: {
    origin: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: false
    }
  },

  components: {
    OriginTooltip
  },

  computed: {
    ...mapState(['team'])
  },

  methods: {
    count() {
      let count = 0
      this.team.forEach(champion =>
        champion[this.type].includes(this.origin.name) ? count++ : ''
      )
      return count
    },
    bonusReached(index) {
      if (this.origin.name === 'Ninja') {
        return this.count() === this.origin.bonuses[index].needed ? true : false
      }
      return this.count() >= this.origin.bonuses[index].needed ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
.origin-counter {
  display: flex;
  position: relative;

  &:hover {
    .origin-tooltip {
      display: block;
    }
  }

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

    &--full {
      background: $orange-accent;
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

  .origin-tooltip {
    display: none;
    bottom: 7rem;
  }
}
</style>