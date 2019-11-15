import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      champions: {},
      items: {},
      classes: {},
      origins: {},
      tierlist: {}
    },
    mutations: {
      fetchData(state, {category, data}) {
        state[category] = data;
      }
    },
    actions: {
      async fetchData({ commit }, category) {
        const data = await this.$axios.$get(
          `https://tft-nuxt-db.firebaseio.com/${category}.json`
        );
        commit('fetchData', { data, category });
      }
    }
  })
}

export default createStore;
