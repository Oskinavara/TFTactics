<template>
  <div :class="['tier-square', tierColor]">{{ tier }}</div>
</template>

<script>
export default {
  name: 'TierSquare',

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
        case 'a':
          return 'a-tier'
        case 'b':
          return 'b-tier'
        case 'c':
          return 'c-tier'
        case 'd':
          return 'd-tier'
        case 'e':
          return 'e-tier'
        case '?':
          return 'e-tier'
        default:
          return ''
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
