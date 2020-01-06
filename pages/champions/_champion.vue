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
        <section>
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
        <section>
          <heading-underlined>
            Synergies
          </heading-underlined>
          <ul class="champion-page__synergies">
            <li 
              v-for="synergy in champion.origin"
              :key="synergy"
              class="champion-page__synergy" 
            >
              <img 
                :src="originSrc(synergy)" 
                :alt="`${synergy} icon`" 
                class="champion-page__synergy-icon"
              >
              <champion-icon 
                v-for="icon in originSynergyChampions(synergy)"
                :key="icon.name"
                :champion="icon"
              />
            </li>
            <li 
              v-for="synergy in champion.class"
              :key="synergy"
              class="champion-page__synergy" 
            >
              <img 
                :src="originSrc(synergy)" 
                :alt="`${synergy} icon`" 
                class="champion-page__synergy-icon"
              >
              <champion-icon 
                v-for="icon in classSynergyChampions(synergy)"
                :key="icon.name"
                :champion="icon"
              />
            </li>
          </ul>
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
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue';
import iconUrls from '@/logic/iconUrls.js';


  export default {
    name: 'ChampionPage',

    components: {
      HeadingUnderlined,
      ItemIcon,
      ChampionIcon,
      ChampionStats,
      ChampionAbility,
      ChampionOrigin
    },

    mixins: [iconUrls],

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
      
    //   originUrl() {
    //   return this.origin ? `https://rerollcdn.com/icons/${this.origin.key}.png` : ''
    // },
    // originAlt() {
    //   return this.origin ? `${this.origin.key} splash art` : ''
    // },
      
    },
    methods: {
      originSrc(origin) {
        return `https://rerollcdn.com/icons/${origin.toLowerCase()}.png`
      },
      
    },

    created () {
      let arg = 'Demon'
      let champions = {...this.champions}
      for(let champion in champions){
        if (!champions[champion].origin.includes(arg)) {
          delete champions[champion]
        }
      }
        console.log(champions)
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

    .heading-underlined__text{
      font-size: 2.1rem;
      padding-bottom: 2rem;
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

    &__main{
      width: calc(100% - 30rem);
      padding: 0 0 0 3rem;
      border-left: 1px solid $border-color;
    }

    &__synergies{
      list-style-type: none;
      padding-top: 3rem;
    }

    &__synergy{
      display: flex;
      align-items: center;
      margin-bottom: 3rem;

      &-icon{
        height: 3.2rem;
        width: 3rem;
        margin-right: 2rem;
      }

      .champion-icon{
        margin: 0 1.5rem;
        height: 5rem;
        width: 5rem;
      }
    }
  }
</style>