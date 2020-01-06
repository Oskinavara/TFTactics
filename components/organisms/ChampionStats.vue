<template>
  <section class="champion-page__section">
    <heading-underlined>
      Stats
    </heading-underlined>
    <ul class="champion-page__stats">
      <li class="champion-page__stat">
        <span class="champion-page__stat-name">Cost:</span>
        <span class="champion-page__stat-value">
          <img 
            src="https://rerollcdn.com/ui/icon-gold.svg" 
            alt="gold icon" 
            class="champion-page__gold-icon"
            v-size="13"
          >
          {{champion.cost}}
        </span>
      </li>
      <li class="champion-page__stat">
        <span class="champion-page__stat-name">Health: </span>
        <span class="champion-page__stat-value">{{champion.stats.defense.health}}</span>
      </li>
      <li class="champion-page__stat">
        <span class="champion-page__stat-name">Mana: </span>
        <span class="champion-page__stat-value">{{champion.ability.manaCost}}</span>
      </li>
      <li class="champion-page__stat">
        <span class="champion-page__stat-name">Armor: </span>
        <span class="champion-page__stat-value">{{champion.stats.defense.armor}}</span>
      </li>
      <li class="champion-page__stat">
        <span class="champion-page__stat-name">MR: </span>
        <span class="champion-page__stat-value">{{champion.stats.defense.magicResist}}</span>
      </li>
      <li class="champion-page__stat">
        <span class="champion-page__stat-name">DPS: </span>
        <span class="champion-page__stat-value">
          {{(champion.stats.offense.damage * champion.stats.offense.attackSpeed).toFixed(0)}}
        </span>
      </li>
      <li class="champion-page__stat">
        <span class="champion-page__stat-name">Damage: </span>
        <span class="champion-page__stat-value">{{champion.stats.offense.damage}}</span>
      </li>
      <li class="champion-page__stat">
        <span class="champion-page__stat-name">MR: </span>
        <span class="champion-page__stat-value">{{champion.stats.offense.attackSpeed}}</span>
      </li>
      <li class="champion-page__stat">
        <span class="champion-page__stat-name">Crit rate: </span>
        <span class="champion-page__stat-value">25%</span>
      </li>
      <li class="champion-page__stat">
        <span class="champion-page__stat-name">Range: </span>
        <span class="champion-page__stat-value">{{champion.stats.offense.range}}</span>
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

</style>