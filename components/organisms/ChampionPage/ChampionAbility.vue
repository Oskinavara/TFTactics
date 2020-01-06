<template>
  <section class="champion-ability">
    <heading-underlined style="margin-top: 0">
      Abilities
    </heading-underlined>
    <div class="champion-ability__wrapper">
      <img :src="abilityUrl" alt="ability icon" class="champion-ability__icon">
      <div class="champion-ability__data">
        <div class="champion-ability__header">
          <div class="champion-ability__name">
            <h2>{{champion.ability.name}}</h2>
            <h4>{{champion.ability.type}}</h4>
          </div>
          <div class="champion-ability__mana" v-if="champion.ability.manaCost">
            <img src="https://rerollcdn.com/ui/icon-mana.svg" alt="mana icon" class="champion-ability__mana-icon">
            <span>
              <b>{{ champion.ability.manaStart }}</b>
              {{' / ' + champion.ability.manaCost}}
            </span>
          </div>
        </div>
        <p class="champion-ability__description">
          {{champion.ability.description}}
        </p>
        <ul class="champion-ability__stats">
          <li class="champion-ability__stat" v-for="stat in champion.ability.stats" :key="stat.type">
            <span class="champion-ability__stat-name">{{stat.type + ':'}}</span>
            <span class="champion-ability__stat-value">{{stat.value}}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  import HeadingUnderlined from '@/components/atoms/HeadingUnderlined.vue';
  export default {
    props: {
      champion: {
        type: Object,
        required: true
      },
    },

    components: {
      HeadingUnderlined,
    },

    computed: {
      abilityUrl() {
        let abilityName = this.champion.ability.name.toLowerCase()
        .replace(' ', '-').replace(' ', '-').replace(/([!'])+/g, '');
        let championName = this.champion.name.toLowerCase().replace(' ', '-').replace(/(['])+/g, '');
        return `https://rerollcdn.com/abilities/${championName}-${abilityName}.png`
      },
    },
  }
</script>

<style lang="scss" scoped>
  .champion-ability{
    &__wrapper{
      display: flex;
      padding-top: 2rem;
      margin-bottom: 3rem;
    }

    &__icon{
      padding: 0.2rem;
      border: 1px solid $border-color;
      height: 6rem;
      width: 6rem;
    }

    &__data{
      width: 100%;
      margin-left: 3rem;
    }

    &__header{
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;

      h2{
        font-size: 2.1rem;
        margin-bottom: 1rem;
      }

      h4{
        font-size: 1.6rem;
        color: $textgray;
        font-weight: normal;
      }
    }

    &__mana{
      display: flex;
      align-items: center;

      b{
        font-size: 1.8rem;
      }

      span{
        font-size: 1.4rem;
      }

      &-icon{
        width: 16px;
        margin-right: 0.5rem;
      }
    }

    &__description{
      margin-bottom: 2rem;
    }

    &__stats{
      list-style-type: none;
    }

    &__stat{
      margin-bottom: 0.5rem;

      &-name{
        color: $textgray;
        font-weight: 600;
        line-height: 2.8rem;
      }
    }
  }


</style>