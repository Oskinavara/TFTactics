<template>
  <div class="listing">
    <heading-underlined>
      <slot />
    </heading-underlined>
    <div class="listing__content" v-if="dataType === 'item'">
      <item-icon
        v-for="item in data"
        :item="item"
        :key="item.name"
        @click.native="selectItem(item)"
        :class="{'item-icon--selected': selectedItem === item}"
      />
    </div>
    <div class="listing__content" v-if="dataType === 'champion'">
      <champion-icon
        v-for="champion in data"
        :champion="champion"
        :key="champion.name"
        :class="{'champion-icon--selected': selectedChampion === champion}"
        :isTeamBuilder="true"
      />
    </div>
  </div>
</template>

<script>
import ItemIcon from '@/components/atoms/icons/ItemIcon.vue'
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'
import HeadingUnderlined from '@/components/atoms/HeadingUnderlined.vue'

export default {
  components: {
    ItemIcon,
    ChampionIcon,
    HeadingUnderlined
  },

  props: {
    data: {
      type: Object,
      required: true
    },
    dataType: {
      type: String,
      required: false,
      default: 'item'
    },
    selectedItem: {
      type: Object,
      required: false
    }
  },

  methods: {
    selectItem(item) {
      this.$emit('set-item', item)
    }
  }
}
</script>

<style lang="scss">
.listing {
  &__heading-wrapper {
    margin: 2rem 0 1rem 0;
    width: 100%;
    border-bottom: 1px solid $border-color;
  }

  &__heading {
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: $textwhite;
    display: inline-block;
    border-bottom: 4px solid $orange-accent;
    padding: 0 1rem 1rem 1rem;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;

    .item-icon {
      margin: 0.75rem 0.5rem;
      max-height: 4rem;
      max-width: 4rem;
      opacity: 0.5;
      transition: opacity 0.3s;
      &:hover {
        opacity: 1;
      }

      &--selected {
        opacity: 1;
        .item-icon__image {
          border: 1px solid $orange-accent;
        }
      }
    }

    .champion-icon {
      height: 5.5rem;
      width: 5rem;
      padding: 0.75rem 0.5rem;
    }
  }
}
</style>