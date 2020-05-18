<template>
  <div class="tier-block">
    <TierSquare :tier="tier" />
    <div class="tier-block__container">
      <slot />
    </div>
  </div>
</template>

<script>
import TierSquare from '@/components/atoms/TierSquare.vue'

export default {
  name: 'TierBlock',
  components: {
    TierSquare
  },
  props: {
    tier: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.tier-block {
  width: 100%;
  min-height: 7rem;
  display: flex;
  margin-top: 1rem;

  &__container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    min-height: 7rem;
    width: calc(100% - 7rem);
    background: $dark-gray;
    border: 1px solid $border-color;

    .div {
      margin: 0.5rem 1.25rem;

      @include media-m {
        margin: 0.5rem 0.9rem;
      }

      @include media-s {
        width: 50%;
        padding: 1rem 0;
        margin: 0;
        height: auto;
      }
    }

    .champion-icon,
    .item-icon,
    .origin-icon {
      margin: 0.5rem 1.25rem;

      @include media-s {
        width: calc(25%);
        margin: 0;
        padding: 0.5rem calc((25% - 4.5rem) / 2);
        height: 5.5rem;

        .item-icon__image {
          width: 4.5rem;
        }
      }
    }

    .origin-icon {
      @include media-s {
        width: 50%;
        height: auto;
      }
    }
  }
}
</style>
