<template>
  <section class="champion-stats">
    <heading-underlined>
      Stats
    </heading-underlined>
    <ul class="champion-stats__list">
      <li class="champion-stats__stat">
        <span class="champion-stats__name">Cost:</span>
        <span class="champion-stats__value">
          <img 
            src="https://rerollcdn.com/ui/icon-gold.svg" 
            alt="gold icon" 
            class="champion-stats__gold-icon"
          >
          {{champion.cost}}
        </span>
      </li>
      <li class="champion-stats__stat">
        <span class="champion-stats__name">Health: </span>
        <span class="champion-stats__value">{{champion.stats.defense.health}}</span>
      </li>
      <li class="champion-stats__stat">
        <span class="champion-stats__name">Mana: </span>
        <span class="champion-stats__value">{{champion.ability.manaCost}}</span>
      </li>
      <li class="champion-stats__stat">
        <span class="champion-stats__name">Armor: </span>
        <span class="champion-stats__value">{{champion.stats.defense.armor}}</span>
      </li>
      <li class="champion-stats__stat">
        <span class="champion-stats__name">MR: </span>
        <span class="champion-stats__value">{{champion.stats.defense.magicResist}}</span>
      </li>
      <li class="champion-stats__stat">
        <span class="champion-stats__name">DPS: </span>
        <span class="champion-stats__value">
          {{(champion.stats.offense.damage * champion.stats.offense.attackSpeed).toFixed(0)}}
        </span>
      </li>
      <li class="champion-stats__stat">
        <span class="champion-stats__name">Damage: </span>
        <span class="champion-stats__value">{{champion.stats.offense.damage}}</span>
      </li>
      <li class="champion-stats__stat">
        <span class="champion-stats__name">MR: </span>
        <span class="champion-stats__value">{{champion.stats.offense.attackSpeed}}</span>
      </li>
      <li class="champion-stats__stat">
        <span class="champion-stats__name">Crit rate: </span>
        <span class="champion-stats__value">25%</span>
      </li>
      <li class="champion-stats__stat">
        <span class="champion-stats__name">Range: </span>
        <span class="champion-stats__value">{{champion.stats.offense.range}}</span>
      </li>
    </ul>
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
    
  }
</script>

<style lang="scss" scoped>
  .champion-stats{
    margin-top: 2rem;

    &__stat{
      display: flex;
      margin: 1rem 0;
    }

    &__name{
      font-size: 16px;
      font-weight: 600;
      color: $textgray;
      margin-right: 0.5rem;
    }

    &__value{
      display: flex;
      align-items: flex-end;
      color: $white;
    }

    &__gold-icon{
      margin: 0 0.5rem;
      opacity: 0.54;
      height: 1.3rem;
      width: 1.3rem;
    }
  }
</style>