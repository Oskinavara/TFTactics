import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';

const createStore = () => {
  return new Vuex.Store({
    state: {
      apiData: {
        champions: {},
        items: {},
        classes: {},
        origins: {},
        tierlist: {}
      },
      filters: {
        cost: [],
        origin: [],
        class: []
      }
    },
    
    mutations: {
      fetchData(state, { category, data }) {
        state.apiData[category] = data
      },
      initFilters(state) {
        state.filters = {
          cost: [],
          origin: [],
          class: []
        };
      },
      toggleFilter(state, {filter, getters}) {
        for(let category in state.filters){          
          if(getters[`${category}Array`].includes(filter)){
            state.filters[category].includes(filter) ?
            state.filters[category] = state.filters[category].filter(x => x !== filter) :
            state.filters[category].push(filter);
          }
        }
      }
    },

    actions: {
      async fetchData({ commit }, category) {
        const data = await this.$axios.$get(`https://tft-nuxt-db.firebaseio.com/${category}.json`)
        commit('fetchData', { data, category })
      },
      initFilters({commit}) {
        commit('initFilters');
      },
      toggleFilter({commit, getters}, filter) {
        commit('toggleFilter', {filter, getters})
      }
    },

    getters: {
      costArray: () => {
        return [1, 2, 3, 4, 5]
      },
      originArray: state => {
        return Object.keys(state.apiData.origins)
      },
      classArray: state => {
        return Object.keys(state.apiData.classes)
      }
    },

    plugins: [new VuexPersistence().plugin]
  })
}

export default createStore
