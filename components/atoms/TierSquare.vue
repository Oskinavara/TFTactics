<template>
  <div :class="['tier-square', tierColor]">{{tier}}</div>
</template>

<script>
export default {
  name: 'TierSquare',

  props: {
    tier: {
      type: String,
      default: true
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
.tier-square {
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