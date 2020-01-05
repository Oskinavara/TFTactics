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
            <item-icon v-for="item in champion.items" :key="item" :item="items[item]"/>
          </div>
        </section>
        <section class="champion-page__section">
          <heading-underlined>
            Stats
          </heading-underlined>
        </section>

      </div>
      <div class="champion-page__wrapper">
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeadingUnderlined from '@/components/atoms/HeadingUnderlined.vue';
import ItemIcon from '@/components/atoms/icons/ItemIcon.vue';

  export default {
    name: 'ChampionPage',

    components: {
      HeadingUnderlined,
      ItemIcon
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
      padding: 2rem 0;

      .item-icon{
        margin: 0 1rem;
      }
    }

    .heading-underlined__text{
      font-size: 2.1rem;
      padding-bottom: 1.5rem;
    }
  }
</style>