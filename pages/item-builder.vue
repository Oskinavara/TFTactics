<template>
  <div class="item-builder page">
    <div class="item-builder__inner inner">
      <div class="item-builder__sidebar sidebar">
        <page-heading>Choose an item</page-heading>
        <search-bar />
        <item-listing
          v-for="listing in itemListings"
          :key="listing.name"
          :items="listing.content"
          :selectedItem="selectedItem"
          @set-item="setItem"
        >{{listing.name}}</item-listing>
      </div>
      <div class="item-builder__wrapper">
        <page-heading>Teamfight Tactics Item Builder Cheat Sheet</page-heading>
        <divider />
        <div class="item-builder__selected-item" v-if="selectedItem">
          <item-icon :item="selectedItem" />
          {{selectedItem.name}}
        </div>
        <custom-table :columns="columns" :tableData="filteredCombinedItems">
          <template v-slot:[columns[0].name]="{row}">
            <item-icon :item="firstItem" />
            <item-icon :item="secondItem(row)" />
          </template>
          <template v-slot:[columns[1].name]="{row}">
            <item-icon :item="row" />
            <p class="item-builder__bonus">{{row.bonus}}</p>
          </template>
          <template v-slot:[columns[2].name]="{row}">
            <tier-square :tier="itemTier(row)" />
          </template>
        </custom-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PageHeading from '@/components/atoms/PageHeading.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'
import ItemIcon from '@/components/atoms/icons/ItemIcon.vue'
import Divider from '@/components/atoms/Divider.vue'
import CustomTable from '@/components/organisms/CustomTable.vue'
import ItemListing from '@/components/molecules/Pages/ItemListing.vue'
import TierSquare from '@/components/atoms/TierSquare.vue'

export default {
  name: 'ItemBuilder',

  data() {
    return {
      selectedItem: null,
      columns: [
        {
          name: 'Recipe',
          width: 6,
          position: 'flex-start'
        },
        {
          name: 'Combines Into',
          width: 22,
          position: 'flex-start'
        },
        {
          name: 'Tier',
          width: 4,
          position: 'center'
        }
      ]
    }
  },

  components: {
    PageHeading,
    SearchBar,
    ItemListing,
    ItemIcon,
    CustomTable,
    Divider,
    TierSquare
  },

  computed: {
    ...mapState({
      items: state => state.apiData.items,
      tierlist: state => state.apiData.tierlist.items
    }),
    baseItems() {
      let items = { ...this.items }
      for (let item in items) {
        if (items[item].depth === 2) {
          delete items[item]
        }
      }
      return items
    },
    combinedItems() {
      let items = { ...this.items }
      for (let item in items) {
        if (items[item].depth === 1) {
          delete items[item]
        }
      }
      return items
    },
    filteredCombinedItems() {
      let items = { ...this.combinedItems }
      if (this.selectedItem.depth === 2) {
        return {
          [this.selectedItem.key]: this.selectedItem
        }
      }
      for (let item in items) {
        if (!items[item].buildsFrom.includes(this.selectedItem.key)) {
          delete items[item]
        }
      }
      return items
    },
    itemListings() {
      return [
        { name: 'Base Items', content: this.baseItems },
        { name: 'Combined Items', content: this.combinedItems }
      ]
    },
    firstItem() {
      if (this.selectedItem.depth === 2) {
        return this.items[this.selectedItem.buildsFrom[0]]
      } else return this.selectedItem
    }
  },

  methods: {
    setItem(item) {
      this.selectedItem = item
    },
    secondItem(item) {
      if (this.selectedItem.depth === 2) {
        if (this.selectedItem.buildsFrom[0] === this.firstItem.key) {
          return this.items[this.selectedItem.buildsFrom[1]]
        } else return this.items[this.selectedItem.buildsFrom[0]]
      }
      if (item.buildsFrom[0] === this.selectedItem.key) {
        return this.items[item.buildsFrom[1]]
      } else return this.items[item.buildsFrom[0]]
    },
    itemTier(item) {
      let tiers = ['s', 'a', 'b', 'c', 'd', '?']
      for (let tier in this.tierlist) {
        if (this.tierlist[tier].includes(item.key)) {
          return tiers[tier]
        }
      }
    }
  },

  created() {
    this.selectedItem = this.items.bfsword
  }
}
</script>

<style lang="scss" scoped>
.item-builder {
  &__wrapper {
    width: calc(100% - 30rem);
    padding: 0 0 0 3rem;
    border-left: 1px solid $border-color;
  }

  &__selected-item {
    display: flex;
    align-items: center;
    line-height: 3rem;
    margin: 2rem 0;

    .item-icon {
      margin: 0 1rem 0 0;
      width: 3rem;
      height: 3rem;
    }
  }

  &__bonus {
    font-size: 1.5rem;
    margin-left: 1rem;
    color: $white;
  }

  .search-bar {
    margin: 2rem 0;
  }

  th {
    font-size: 1.4rem;
  }

  td {
    .item-icon {
      width: 3.5rem;
      height: 3.5rem;
      margin: 0 1rem 0 0;
    }

    .tier-square {
      width: 2.5rem;
      min-height: 2.5rem;
      border-radius: 0.25rem;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
}
</style>