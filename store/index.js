import Vuex from 'vuex'

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
      },
      team: [],
      mobileMenuOpened: false
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
        }
      },
      toggleFilter(state, { filter, getters }) {
        for (let category in state.filters) {
          if (getters[`${category}Array`].includes(filter)) {
            state.filters[category].includes(filter)
              ? (state.filters[category] = state.filters[category].filter(
                x => x !== filter
              ))
              : state.filters[category].push(filter)
          }
        }
      },
      addChampion(state, champion) {
        if (state.team.indexOf(champion) !== -1) {
          state.team.splice(state.team.indexOf(champion), 1)
        } else if (state.team.length < 9) {
          state.team.push(champion)
        }
      },
      clearTeam(state) {
        state.team = []
      },
      toggleMobileMenu(state) {
        state.mobileMenuOpened = !state.mobileMenuOpened
      }
    },

    actions: {
      async fetchData({ commit }, category) {
        const data = await this.$axios.$get(
          `https://tft-nuxt-db.firebaseio.com/${category}.json`
        )
        commit('fetchData', { data, category })
      },
      initFilters({ commit }) {
        commit('initFilters')
      },
      toggleFilter({ commit, getters }, filter) {
        commit('toggleFilter', { filter, getters })
      },
      addChampion({ commit }, champion) {
        commit('addChampion', champion)
      },
      clearTeam({ commit }) {
        commit('clearTeam')
      },
      toggleMobileMenu({ commit }) {
        commit('toggleMobileMenu')
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
    }
  })
}

export default createStore
