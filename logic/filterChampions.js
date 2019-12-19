export default {
  mounted () {
    this.$store.dispatch('initFilters');
  },
  methods: {
    filteredChampions(array) {        
      return this.filterDataBySearch(
        this.filterChampionsByCost(
          this.filterChampionsByOrigin(
            this.filterChampionsByClass(array)
          ) 
        )
      );
    },
    filterDataBySearch(array) {
      if (!this.inputValue) {
        return array
      }
      else {
        let newArray = array.filter(item => item.toUpperCase().includes(this.inputValue.toUpperCase()));
        return newArray;
      }
    },
    filterChampionsByCost(array) {
      if(!this.filters.cost.length){
        return array
      }
      else if(this.filters.cost.length >= 2){
        return []
      }
      else return array.filter(champion => this.champions[champion].cost === this.filters.cost[0])
    },
    filterChampionsByOrigin(array) {      
      if(!this.filters.origin.length){
        return array
      }
      else return array.filter(champion => this.filters.origin.includes
        (this.champions[champion].origin[0].toLowerCase())
      );
    },
    filterChampionsByClass(array) {      
      if(!this.filters.class.length){
        return array
      }
      else return array.filter(champion => this.filters.class.includes
        (this.champions[champion].class[0].toLowerCase())
      );
    },
  },
}