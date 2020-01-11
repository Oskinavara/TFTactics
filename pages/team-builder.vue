<template>
  <div class="team-builder page">
    <div class="team-builder__inner inner">
      <div class="team-builder__sidebar sidebar">
        <page-heading>Choose Your Champions</page-heading>
        <search-bar />
        <listing
          v-for="cost in 5"
          :key="cost"
          data-type="champion"
          :data="sameCostChampions(cost)"
        >{{ `Cost ${cost}` }}</listing>
      </div>
      <div class="team-builder__wrapper main">
        <page-heading>
          Teamfight Tactics Team Builder - ({{team.length}} / 9)
          <template #content>
            <div class="team-builder__button-wrapper">
              <base-button @click="copyTeam()">Copy Link to Team</base-button>
              <base-button @click="clearTeam()">Clear Team</base-button>
            </div>
          </template>
        </page-heading>
        <divider />
        <div class="team-builder__team" v-if="team.length">
          <div class="team-builder__champion-wrapper" v-for="champion in team" :key="champion.name">
            <champion-icon
              :champion="champion"
              :showOrigins="true"
              :isLink="false"
              :showName="true"
            />
          </div>
        </div>
        <div class="team-builder__team team-builder__team--empty" v-else>Your team is empty!</div>
        <div class="team-builder__origins-and-classes">
          <div class="team-builder__origins">
            <h2 class="team-builder__category-name">Origins</h2>
            <divider />
            <div class="team-builder__origin-wrapper">
              <origin-counter
                v-for="origin in origins"
                :origin="origin"
                :key="origin.key"
                type="origin"
              />
            </div>
          </div>
          <div class="team-builder__origins">
            <h2 class="team-builder__category-name">Classes</h2>
            <divider />
            <div class="team-builder__origin-wrapper">
              <origin-counter
                v-for="origin in classes"
                :origin="origin"
                :key="origin.key"
                type="class"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'
import OriginCounter from '@/components/atoms/OriginCounter.vue'
import Divider from '@/components/atoms/Divider.vue'
import Listing from '@/components/molecules/Pages/Listing.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'

export default {
  components: {
    ChampionIcon,
    Listing,
    BaseButton,
    PageHeading,
    SearchBar,
    Divider,
    OriginCounter
  },

  computed: {
    ...mapState({
      champions: state => state.apiData.champions,
      origins: state => state.apiData.origins,
      classes: state => state.apiData.classes,
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
    },
    copyTeam() {
      //  ' this.$store.dispatch('clearTeam')'
    }
  },

  mounted() {
    this.$bus.$on('select-champion', this.selectChampion)
    this.clearTeam()
  },

  beforeDestroy() {
    this.$bus.$off('select-champion')
  }
}
</script>

<style lang="scss" scoped>
.team-builder {
  &__team {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    min-height: 25rem;
    margin-bottom: 4rem;

    &--empty {
      border: 1px solid $s-tier;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;
    }
  }

  &__champion {
    &-wrapper {
      width: 20%;
      padding: 1rem 1.5rem 5rem 1.5rem;

      .champion-icon {
        height: 5.5rem;
        width: 5.5rem;
        margin: 0 auto 0.5rem auto;
      }
    }

    &-name {
      text-align: center;
    }
  }

  &__button-wrapper {
    display: flex;

    .base-button:first-of-type {
      margin-right: 2rem;
    }
  }

  &__origins-and-classes {
    display: flex;
  }

  &__origins {
    width: calc(50% - 2.5rem);

    &:first-of-type {
      margin-right: 5rem;
    }
  }

  &__origin-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;

    .origin-counter {
      width: calc(25% - 2rem);
      margin: 1rem;
    }
  }

  .search-bar {
    margin-top: 2rem;
  }
}
</style>