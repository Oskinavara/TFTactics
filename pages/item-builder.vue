<template>
  <div class="item-builder page">
    <div class="item-builder__inner inner">
      <div class="item-builder__sidebar sidebar">
        <page-heading>
          Choose an item
        </page-heading>
        <search-bar/>
        <item-listing 
          v-for="listing in itemListings" 
          :key="listing.name" 
          :items="listing.content" 
          :selectedItem="selectedItem" 
          @set-item="setItem"
        >
          {{listing.name}}
        </item-listing>
      </div>
      <div class="item-builder__wrapper">
        <page-heading>
          Teamfight Tactics Item Builder Cheat Sheet
        </page-heading>
        <divider/>
        <div class="item-builder__selected-item" v-if="selectedItem">
          <item-icon :item="selectedItem"/>
          {{selectedItem.name}}
        </div>
        <custom-table :columnNames="columnNames">
          <tr v-for="(combinedItem, index) in filteredCombinedItems" :key="index">
            <th>
              <item-icon :item="firstItem"/>
              <item-icon :item="secondItem(combinedItem)"/>
            </th>
            <th>
              <item-icon :item="combinedItem"/>
              <p>{{combinedItem.bonus}}</p>
            </th>
            <th>
              {{'A'}}
            </th>
          </tr>
        </custom-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PageHeading from '@/components/atoms/PageHeading.vue';
import SearchBar from '@/components/atoms/SearchBar.vue';
import ItemIcon from '@/components/atoms/icons/ItemIcon.vue';
import Divider from '@/components/atoms/Divider.vue';
import CustomTable from '@/components/organisms/CustomTable.vue';
import ItemListing from '@/components/molecules/Pages/ItemListing.vue';
export default {
  name: 'ItemBuilder',

  data() {
    return {
      selectedItem: null
    }
  },

  components: {
    PageHeading,
    SearchBar,
    ItemListing,
    ItemIcon,
    CustomTable,
    Divider
  },

  computed: {
    ...mapState({
      items: state => state.apiData.items
    }),
    baseItems() {
      let items = {...this.items}
      for(let item in items){
        if(items[item].depth === 2){
          delete items[item]
        }
      }
      return items
    },
    combinedItems() {
      let items = {...this.items}
      for(let item in items){
        if(items[item].depth === 1){
          delete items[item]
        }
      }
      return items
    },
    filteredCombinedItems() {
      let items = {...this.combinedItems}
      if(this.selectedItem.depth === 2){
        return {
          [this.selectedItem.key]: this.selectedItem
        }
      }
      for(let item in items){
        if(!items[item].buildsFrom.includes(this.selectedItem.key)){
          delete items[item]
        }
      }
      return items
    },
    columnNames() {
      return ['Recipe', 'Combines into', 'Tier'];
    },
    itemListings() {
      return [
        {name: 'Base Items', content: this.baseItems},
        {name: 'Combined Items', content: this.combinedItems}
      ]
    },
    firstItem() {
      if(this.selectedItem.depth === 2){
        return this.items[this.selectedItem.buildsFrom[0]];
      }
      else return this.selectedItem;
    },
  },

  methods: {
    setItem(item) {
      this.selectedItem = item;
    },
    secondItem(item) {
      if(this.selectedItem.depth === 2){
        if(this.selectedItem.buildsFrom[0] === this.firstItem.key){
          return this.items[this.selectedItem.buildsFrom[1]]
        }
        else return this.items[this.selectedItem.buildsFrom[0]]
      }
      if (item.buildsFrom[0] === this.selectedItem.key){
        return this.items[item.buildsFrom[1]]
      }
      else return this.items[item.buildsFrom[0]]
    }
  },

  created () {
    this.selectedItem = this.items.bfsword;
  },
}
</script>

<style lang="scss" scoped>
  .item-builder{
    &__wrapper{
      width: calc(100% - 30rem);
      padding: 0 0 0 3rem;
      border-left: 1px solid $border-color;
    }

    &__selected-item{
      display: flex;
      align-items: center;
      line-height: 3rem;
      margin: 2rem 0;

      .item-icon{
        margin: 0 1rem 0 0;
        width: 3rem;
        height: 3rem;
      }
    }

    .search-bar{
      margin: 2rem 0;
    }

    th .item-icon{
      width: 3.5rem;
      height: 3.5rem;
      margin-right: 1rem;
    }
  }

</style>