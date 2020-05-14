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

<style lang="scss" scoped>
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

    div {
      margin: 0.5rem 1.25rem;
    }
  }
}
</style>
