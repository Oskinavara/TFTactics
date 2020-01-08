<template>
  <div class="database-champion-stats">
    <p
      class="database-description"
    >Find a list of all the Champion stats in Teamfight Tactics including health, range, and dps.</p>
    <div class="database-champion-stats__category-wrapper">
      <div
        class="database-champion-stats__category"
        :class="{'database-champion-stats__category--active' : currentCategory === category}"
        v-for="category in Object.keys(columns)"
        @click="currentCategory = category"
      >{{category}}</div>
    </div>
    <custom-table
      :columns="columns.offense"
      :tableData="champions"
      v-if="currentCategory === 'offense'"
    >
      <template v-slot:[columns.offense[0].name]="{row}">
        <router-link :to="`/champions/${row.key}`" class="database-champion-stats__champion-link">
          <champion-icon :champion="row" />
          <span>{{row.name}}</span>
        </router-link>
      </template>
      <template v-slot:[columns.offense[1].name]="{row}">
        <span>{{row.stats.offense.dps}}</span>
      </template>
      <template v-slot:[columns.offense[2].name]="{row}">
        <span>{{row.stats.offense.attackSpeed}}</span>
      </template>
      <template v-slot:[columns.offense[3].name]="{row}">
        <span>{{row.stats.offense.damage}}</span>
      </template>
      <template v-slot:[columns.offense[4].name]="{row}">
        <span>{{row.stats.offense.range}}</span>
      </template>
    </custom-table>

    <custom-table :columns="columns.defense" :tableData="champions" v-else>
      <template v-slot:[columns.defense[0].name]="{row}">
        <champion-icon :champion="row" />
        <span>{{row.name}}</span>
      </template>
      <template v-slot:[columns.defense[1].name]="{row}">
        <span>{{row.stats.defense.health}}</span>
      </template>
      <template v-slot:[columns.defense[2].name]="{row}">
        <span>{{row.ability.manaCost ? row.ability.manaCost : 0}}</span>
      </template>
      <template v-slot:[columns.defense[3].name]="{row}">
        <span>{{row.stats.defense.armor}}</span>
      </template>
      <template v-slot:[columns.defense[4].name]="{row}">
        <span>{{row.stats.defense.magicResist}}</span>
      </template>
    </custom-table>
  </div>
</template>

<script>
import CustomTable from '@/components/organisms/CustomTable.vue'
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'
import { mapState } from 'vuex'

export default {
  name: 'DatabaseChampions',

  layout: 'database',

  data() {
    return {
      currentCategory: 'offense',
      columns: {
        offense: [
          {
            name: 'Champion',
            width: 15,
            position: 'flex-start'
          },
          {
            name: 'DPS',
            width: 11,
            position: 'flex-end'
          },
          {
            name: 'Atk Spd',
            width: 10,
            position: 'flex-end'
          },
          {
            name: 'Damage',
            width: 10,
            position: 'flex-end'
          },
          {
            name: 'Range',
            width: 10,
            position: 'flex-end'
          }
        ],
        defense: [
          {
            name: 'Champion',
            width: 15,
            position: 'flex-start'
          },
          {
            name: 'Health',
            width: 11,
            position: 'flex-end'
          },
          {
            name: 'Mana',
            width: 10,
            position: 'flex-end'
          },
          {
            name: 'Armor',
            width: 10,
            position: 'flex-end'
          },
          {
            name: 'MR',
            width: 10,
            position: 'flex-end'
          }
        ]
      }
    }
  },

  components: {
    ChampionIcon,
    CustomTable
  },

  computed: {
    ...mapState({
      champions: state => state.apiData.champions
    })
  },

  methods: {
    iconSrc(item) {
      return `https://rerollcdn.com/icons/${item}.png`.toLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.database-champion-stats {
  span {
    margin-left: 1rem;
  }

  &__category-wrapper {
    display: flex;
    margin-bottom: 1rem;
  }

  &__category {
    width: calc(25% - 1rem);
    display: flex;
    justify-content: center;
    align-items: center;
    background: $dark-blue;
    height: 4rem;
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 600;
    margin-right: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background: $blue;
    }

    &--active {
      background: $blue;
    }
  }

  &__champion-link {
    display: flex;
    align-items: center;
    text-decoration: none;

    &:hover {
      span {
        color: $text-blue--light;
      }
    }

    span {
      transition: color 0.3s;
      color: $text-blue;
    }
  }
}
</style>