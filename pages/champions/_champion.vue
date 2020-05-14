<template>
  <div class="champion-page page">
    <div class="champion-page__inner inner">
      <div class="champion-page__sidebar sidebar">
        <div class="champion-page__portrait">
          <div class="champion-page__image-wrapper">
            <img
              :src="championUrl"
              :alt="`${championName} splash art`"
              class="champion-page__image"
            />
          </div>
          <h2 class="champion-page__name">
            {{ `Teamfight Tactics ${championName}` }}
          </h2>
        </div>
        <section>
          <HeadingUnderlined>Item Build</HeadingUnderlined>
          <div class="champion-page__item-wrapper">
            <ItemIcon
              v-for="item in champion.items"
              :key="item"
              :item="items[item]"
            />
          </div>
        </section>
        <ChampionStats :champion="champion" />
      </div>
      <div class="champion-page__main">
        <ChampionAbility :champion="champion" />
        <ChampionOrigin
          v-for="origin in champion.origin"
          :key="origin"
          :origin="origins[origin.toLowerCase()]"
          type="Origin"
        />
        <ChampionOrigin
          v-for="origin in champion.class"
          :key="origin"
          :origin="classes[origin.toLowerCase()]"
          type="Class"
        />
        <section>
          <HeadingUnderlined>Synergies</HeadingUnderlined>
          <ul class="champion-page__synergies">
            <ChampionSynergy
              v-for="origin in champion.origin"
              :key="origin"
              type="origin"
              :origin="origins[origin.toLowerCase()]"
              :champion="champion"
            />
            <ChampionSynergy
              v-for="origin in champion.class"
              :key="origin"
              type="class"
              :origin="classes[origin.toLowerCase()]"
              :champion="champion"
            />
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeadingUnderlined from '@/components/atoms/HeadingUnderlined.vue'
import ChampionStats from '@/components/organisms/ChampionPage/ChampionStats.vue'
import ChampionAbility from '@/components/organisms/ChampionPage/ChampionAbility.vue'
import ChampionOrigin from '@/components/organisms/ChampionPage/ChampionOrigin.vue'
import ItemIcon from '@/components/atoms/icons/ItemIcon.vue'
import ChampionSynergy from '@/components/molecules/ChampionSynergy.vue'
import iconUrls from '@/logic/iconUrls.js'

export default {
  name: 'ChampionPage',

  components: {
    HeadingUnderlined,
    ItemIcon,
    ChampionStats,
    ChampionAbility,
    ChampionOrigin,
    ChampionSynergy
  },

  mixins: [iconUrls],

  computed: {
    ...mapState({
      champions: state => state.apiData.champions,
      items: state => state.apiData.items,
      origins: state => state.apiData.origins,
      classes: state => state.apiData.classes
    }),
    champion() {
      return this.champions[this.$route.params.champion]
    },
    championName() {
      return this.champion && this.champion.name
    }
  },

  methods: {
    originSrc(origin) {
      return `https://rerollcdn.com/icons/${origin.toLowerCase()}.png`
    }
  }
}
</script>

<style lang="scss">
.champion-page {
  &__image-wrapper {
    overflow: hidden;
    border-radius: 50%;
    height: 11rem;
    width: 11rem;
    margin: 0 auto 1rem auto;
  }

  &__image {
    height: 12rem;
    width: 12rem;
  }

  &__name {
    font-size: 2.1rem;
    text-align: center;
    max-width: 20rem;
    margin: 0 auto 4rem auto;
  }

  .heading-underlined__text {
    font-size: 2.1rem;
    padding-bottom: 2rem;
  }

  &__item-wrapper {
    display: flex;
    padding: 2rem 0 1.5rem 0;

    .item-icon {
      margin: 0 1rem;
      height: 4rem;
      width: 4rem;
    }
  }

  &__main {
    width: calc(100% - 30rem);
    padding: 0 0 0 3rem;
    border-left: 1px solid $border-color;
  }

  &__synergies {
    list-style-type: none;
    padding-top: 3rem;
  }

  &__synergy {
    display: flex;
    align-items: center;
    margin-bottom: 3rem;

    &-icon {
      height: 3.2rem;
      width: 3rem;
      margin-right: 2rem;
    }

    .champion-icon {
      margin: 0 1.5rem;
      height: 5rem;
      width: 5rem;
    }
  }
}
</style>
