<template>
  <div class="item-builder-page page">
    <div class="item-builder-page__inner inner">
      <div class="item-builder-page__sidebar sidebar">
        <page-heading>
          Choose an item
        </page-heading>
        <search-bar/>
        <item-listing :items="basicItems">
          Base Items
        </item-listing>
        <item-listing :items="advancedItems">
          Base Items
        </item-listing>
      </div>
      <div class="item-builder-page__wrapper">
        <page-heading>
          Teamfight Tactics Champions List
        </page-heading>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PageHeading from '@/components/atoms/PageHeading.vue';
import SearchBar from '@/components/atoms/SearchBar.vue';
import ChampionFilters from '@/components/organisms/ChampionFilters.vue';
import ItemListing from '@/components/molecules/Pages/ItemListing.vue';
export default {
  computed: {
    ...mapState({
      items: state => state.apiData.items
    }),
    basicItems() {
      let items = {...this.items}
      for(let item in items){
        if(items[item].depth === 2){
          delete items[item]
        }
      }
      return items
    },
    advancedItems() {
      let items = {...this.items}
      for(let item in items){
        if(items[item].depth === 1){
          delete items[item]
        }
      }
      return items
    },
  },
  
  components: {
    PageHeading,
    SearchBar,
    ChampionFilters,
    ItemListing
  },
}
</script>

<style lang="scss" scoped>
  .search-bar{
    margin: 3rem 0;
  }

</style>