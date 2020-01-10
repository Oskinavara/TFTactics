<template>
  <li class="champion-page__synergy">
    <img :src="originUrl" :alt="originAlt" class="champion-page__synergy-icon" />
    <champion-icon v-for="icon in synergyChampions" :key="icon.name" :champion="icon" />
  </li>
</template>

<script>
import iconUrls from '@/logic/iconUrls.js'
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'
import { mapState } from 'vuex'

export default {
  name: 'ChampionSynergy',

  props: {
    origin: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    champion: {
      type: Object,
      required: true
    }
  },

  components: {
    ChampionIcon
  },

  mixins: [iconUrls],

  computed: {
    ...mapState({
      champions: state => state.apiData.champions
    }),
    synergyChampions() {
      let champions = { ...this.champions }
      for (let champion in champions) {
        if (!champions[champion][this.type].includes(this.origin.name)) {
          delete champions[champion]
        }
      }
      delete champions[this.champion.key]
      return champions
    }
  }
}
</script>

<style lang="scss" scoped>
</style>