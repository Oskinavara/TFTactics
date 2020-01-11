<template>
  <div class="team-builder page">
    <div class="team-builder__inner inner">
      <div class="team-builder__sidebar sidebar">
        <listing
          v-for="cost in 5"
          :key="cost"
          data-type="champion"
          :data="sameCostChampions(cost)"
        >{{ `Cost ${cost}` }}</listing>
      </div>
      <base-button @click.native="clearTeam()">Clear Team</base-button>
      <!-- <div class="team-builder__wrapper">
        <page-heading>
          Teamfight Tactics Champions List
          <template #content>
            <search-bar />
          </template>
        </page-heading>
        <filter-tags />
        <div class="team-builder__champion-grid">
          <div
            class="team-builder__champion-block"
            v-for="champion in filteredChampions(Object.keys(champions))"
            :key="champion.key"
          >
            <champion-icon :champion="champions[champion]" />
            <p class="team-builder__champion-name">{{champions[champion].name}}</p>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'
import Listing from '@/components/molecules/Pages/Listing.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'

export default {
  data() {
    return {
      // team: []
    }
  },

  components: {
    ChampionIcon,
    Listing,
    BaseButton
  },

  computed: {
    ...mapState({
      champions: state => state.apiData.champions,
      team: state => state.team
    })
  },

  methods: {
    sameCostChampions(cost) {
      let champions = { ...this.champions }
      for (let champion in champions) {
        if (!(champions[champion].cost == cost)) {
          delete champions[champion]
        }
      }
      return champions
    },
    selectChampion(champion) {
      this.team.push(champion)
    },
    clearTeam() {
      this.$store.dispatch('clearTeam')
    }
  },

  mounted() {
    this.$bus.$on('select-champion', this.selectChampion)
  },

  beforeDestroy() {
    this.$bus.$off('select-champion')
  }
}
</script>

<style lang="scss" scoped>
</style>