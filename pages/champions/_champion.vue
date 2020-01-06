<template>
  <div class="champion-page page">
    <div class="champion-page__inner inner">
      <div class="champion-page__sidebar sidebar">
        <div class="champion-page__portrait">
          <div class="champion-page__image-wrapper">
            <img :src="championUrl" :alt="`${champion.name} splash art`" class="champion-page__image">
          </div>
          <h2 class="champion-page__name">
            {{`Teamfight Tactics ${champion.name}`}}
          </h2>
        </div>
        <section class="champion-page__section">
          <heading-underlined>
            Item Build
          </heading-underlined>
          <div class="champion-page__item-wrapper">
            <item-icon 
              v-for="item in champion.items" 
              :key="item" 
              :item="items[item]"
            />
          </div>
        </section>
        <champion-stats :champion="champion"/>

      </div>
      <div class="champion-page__main">
        <champion-ability :champion="champion"/>
        <champion-origin 
          :origin="origins[origin.toLowerCase()]"
          :key="origin"
          v-for="origin in champion.origin"
          type="Origin"
        />
        <champion-origin 
          :origin="classes[origin.toLowerCase()]"
          :key="origin"
          v-for="origin in champion.class"
          type="Class"
        />
        <section class="champion-page__section">
          <heading-underlined>
            Synergies
          </heading-underlined>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeadingUnderlined from '@/components/atoms/HeadingUnderlined.vue';
import ChampionStats from '@/components/organisms/ChampionPage/ChampionStats.vue';
import ChampionAbility from '@/components/organisms/ChampionPage/ChampionAbility.vue';
import ChampionOrigin from '@/components/organisms/ChampionPage/ChampionOrigin.vue';
import ItemIcon from '@/components/atoms/icons/ItemIcon.vue';

  export default {
    name: 'ChampionPage',

    components: {
      HeadingUnderlined,
      ItemIcon,
      ChampionStats,
      ChampionAbility,
      ChampionOrigin
    },

    computed: {
      ...mapState({
        champions: state => state.apiData.champions,
        items: state => state.apiData.items,
        origins: state => state.apiData.origins,
        classes: state => state.apiData.classes,
      }),
      champion() {
        return this.champions[this.$route.params.champion];
      },
      championUrl() {
        return this.champion ? `https://rerollcdn.com/characters/${this.champion.key}.png` : ''
      },
      
      
    },
  }
</script>

<style lang="scss">
  .champion-page{
    &__image-wrapper {
      overflow: hidden;
      border-radius: 50%;
      height: 11rem;
      width: 11rem;
      margin: 0 auto 1rem auto;
    }

    &__image{
      height: 12rem;
      width: 12rem;
    }

    &__name{
      font-size: 2.1rem;
      text-align: center;
      max-width: 20rem;
      margin: 0 auto 4rem auto;
    }

    &__item-wrapper{
      display: flex;
      padding: 2rem 0 1.5rem 0;

      .item-icon{
        margin: 0 1rem;
        height: 4rem;
        width: 4rem;
      }
    }

    .heading-underlined__text{
      font-size: 2.1rem;
      padding-bottom: 2rem;
    }

    

    &__main{
      width: calc(100% - 30rem);
      padding: 0 0 0 3rem;
      border-left: 1px solid $border-color;
    }

    
  }
</style>