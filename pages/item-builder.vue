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
        <custom-table :colNames="colNames" :content="baseItems">
          <div slot-scope="{items}">
            {{items}}
          </div>
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

  data() {
    return {
      selectedItem: null
    }
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
    colNames() {
      return ['Recipe', 'Combines into', 'Tier'];
    },
    itemListings() {
      return [
        {name: 'Base Items', content: this.baseItems},
        {name: 'Combined Items', content: this.combinedItems}
      ]
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

  methods: {
    setItem(item) {
      this.selectedItem = item;
    }
  },

  mounted () {
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
  }

</style>