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
        <section class="champion-page__section">
          <heading-underlined style="margin-top: 0">
            Abilities
          </heading-underlined>
          <div class="champion-page__ability">
            <img :src="abilityUrl" alt="ability icon" class="champion-page__ability-icon">
            <div class="champion-page__ability-data">
              <div class="champion-page__ability-header">
                <div class="champion-page__ability-name">
                  <h2>{{champion.ability.name}}</h2>
                  <h4>{{champion.ability.type}}</h4>
                </div>
                <div class="champion-page__ability-mana">
                  <img src="https://rerollcdn.com/ui/icon-mana.svg" alt="mana icon" class="champion-page__mana-icon">
                  <span>
                    <b>{{ champion.ability.manaStart }}</b>
                    {{' / ' + champion.ability.manaCost}}
                  </span>
                </div>
              </div>
              <p class="champion-page__ability-description">
                {{champion.ability.description}}
              </p>
              <ul class="champion-page__ability-stats">
                <li class="champion-page__ability-stat" v-for="stat in champion.ability.stats" :key="stat.type">
                  <span class="champion-page__ability-stat-name">{{stat.type}}</span>
                  <span class="champion-page__ability-stat-value">{{stat.value}}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
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
import ChampionStats from '@/components/organisms/ChampionStats.vue';
import ItemIcon from '@/components/atoms/icons/ItemIcon.vue';

  export default {
    name: 'ChampionPage',

    components: {
      HeadingUnderlined,
      ItemIcon,
      ChampionStats
    },

    computed: {
      ...mapState({
        champions: state => state.apiData.champions,
        items: state => state.apiData.items
      }),
      champion() {
        return this.champions[this.$route.params.champion];
      },
      championUrl() {
        return this.champion ? `https://rerollcdn.com/characters/${this.champion.key}.png` : ''
      },
      abilityUrl() {
        let abilityName = this.champion.ability.name.toLowerCase().replace(' ', '-').replace(' ', '-');
        return `https://rerollcdn.com/abilities/${this.champion.name.toLowerCase()}-${abilityName}.png`
      },
      dupa() {
        return this.champion.ability.manaCost
      }
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
    &__stats{
      margin-top: 2rem;
    }
    &__stat{
      display: flex;
      margin: 1rem 0;

      &-name{
        font-size: 16px;
        font-weight: 600;
        color: $textgray;
        margin-right: 0.5rem;
      }

      &-value{
        display: flex;
        align-items: flex-end;
        color: $white;
      }
    }

    &__gold-icon{
      margin: 0 0.5rem;
      opacity: 0.54;
      height: 1.3rem;
      width: 1.3rem;
    }

    &__main{
      width: calc(100% - 30rem);
      padding: 0 0 0 3rem;
      border-left: 1px solid $border-color;
    }

    &__ability{
      display: flex;

      &-icon{
        padding: 0.2rem;
        border: 1px solid $border-color;
        height: 6rem;
        width: 6rem;
      }

      &-data{
        width: 100%;
        margin-left: 3rem;
      }

      &-header{
        display: flex;
        justify-content: space-between;
      }
    }

    &__mana-icon{
      width: 16px;
    }
  }
</style>