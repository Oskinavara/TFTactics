<template>
  <div class="tier-block">
    <div :class="['tier-block__tier', tierColor]">
      {{tier}}
    </div>
    <div class="tier-block__container">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tier: {
      type: String,
      required: true
    }
  },
  computed: {
    tierColor() {
      switch (this.tier) {
        case 's':
          return 's-tier'
          break
        case 'a':
          return 'a-tier'
          break
        case 'b':
          return 'b-tier'
          break
        case 'c':
          return 'c-tier'
          break
        case 'd':
          return 'd-tier'
          break
        case 'e':
          return 'e-tier'
          break
        case '?':
          return 'e-tier'
          break
        default:
          break
      }
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

  &__tier {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    font-size: 1.8rem;
    font-weight: 600;
    color: $gray;
    min-height: 7rem;
    text-transform: uppercase;
  }

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

.s-tier {
  background: $s-tier;
}

.a-tier {
  background: $a-tier;
}

.b-tier {
  background: $b-tier;
}

.c-tier {
  background: $c-tier;
}

.d-tier {
  background: $d-tier;
}

.e-tier {
  background: $e-tier;
}
</style>