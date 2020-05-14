<template>
  <div class="team-builder page">
    <div class="team-builder__inner inner">
      <div class="team-builder__sidebar sidebar">
        <PageHeading>Choose Your Champions</PageHeading>
        <SearchBar />
        <Listing
          v-for="cost in 5"
          :key="cost"
          data-type="champion"
          :data="sameCostChampions(cost)"
        >{{ `Cost ${cost}` }}</Listing>
      </div>
      <div class="team-builder__wrapper main">
        <PageHeading>
          Teamfight Tactics Team Builder - ({{ team.length }} / 9)
          <template #content>
            <div class="team-builder__button-wrapper">
              <BaseButton @click="copyTeam()">Copy Link to Team</BaseButton>
              <BaseButton @click="clearTeam()">Clear Team</BaseButton>
            </div>
          </template>
        </PageHeading>
        <Divider />
        <div v-if="team.length" class="team-builder__team">
          <div v-for="champion in team" :key="champion.name" class="team-builder__champion-wrapper">
            <ChampionIcon
              :champion="champion"
              :show-origins="true"
              :is-link="false"
              :show-name="true"
            />
          </div>
        </div>
        <div v-else class="team-builder__team team-builder__team--empty">Your team is empty!</div>
        <div class="team-builder__origins-and-classes">
          <div class="team-builder__origins">
            <h2 class="team-builder__category-name">Origins</h2>
            <Divider />
            <div class="team-builder__origin-wrapper">
              <OriginCounter
                v-for="origin in origins"
                :key="origin.key"
                :origin="origin"
                type="origin"
              />
            </div>
          </div>
          <div class="team-builder__origins">
            <h2 class="team-builder__category-name">Classes</h2>
            <Divider />
            <div class="team-builder__origin-wrapper">
              <OriginCounter
                v-for="origin in classes"
                :key="origin.key"
                :origin="origin"
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

  mounted() {
    this.$bus.$on('select-champion', this.selectChampion)
    this.clearTeam()
  },

  beforeDestroy() {
    this.$bus.$off('select-champion')
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
      this.team = [...this.team, champion]
    },
    clearTeam() {
      this.$store.dispatch('clearTeam')
    },
    copyTeam() {
      //  ' this.$store.dispatch('clearTeam')'
    }
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
