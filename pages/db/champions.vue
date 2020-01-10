<template>
  <div class="database-champions">
    <p
      class="database-description"
    >Find a list of all the Champions in Teamfight Tactics with their corresponding Origins, Classes, and cost.</p>
    <custom-table :columns="columns" :tableData="champions">
      <template v-slot:[columns[0].name]="{row}">
        <router-link :to="`/champions/${row.key}`" class="database-champions__champion-link">
          <champion-icon :champion="row" />
          <span>{{row.name}}</span>
        </router-link>
      </template>
      <template v-slot:[columns[1].name]="{row}">
        <div
          :class="['origin-wrapper', {'origin-wrapper--margin': row.origin.length > 1}]"
          v-for="origin in row.origin"
          :key="origin"
        >
          <img :src="iconSrc(origin)" :alt="`${origin} splash art`" class="origin-icon" />
          <span>{{origin}}</span>
        </div>
      </template>
      <template v-slot:[columns[2].name]="{row}">
        <div class="origin-wrapper" v-for="origin in row.class" :key="origin">
          <img :src="iconSrc(origin)" :alt="`${origin} splash art`" class="origin-icon" />
          <span>{{origin}}</span>
        </div>
      </template>
      <template v-slot:[columns[3].name]="{row}">
        <div class="gold-wrapper">
          <img src="https://rerollcdn.com/ui/icon-gold.svg" alt="gold icon" class="gold-icon" />
          <span>{{row.cost}}</span>
        </div>
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
      columns: [
        {
          name: 'Champion',
          width: 15,
          position: 'flex-start'
        },
        {
          name: 'Origin',
          width: 15,
          position: 'flex-start',
          direction: 'column'
        },
        {
          name: 'Class',
          width: 15,
          position: 'flex-start',
          direction: 'column'
        },
        {
          name: 'Cost',
          width: 8,
          position: 'center'
        }
      ]
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
.database-champions {
  span {
    margin-left: 1rem;
  }

  .origin-wrapper {
    display: flex;
    align-items: center;

    &--margin {
      &:last-of-type {
        margin-top: 1rem;
      }
    }
  }

  .origin-icon {
    height: 2.2rem;
    width: 2.2rem;
  }

  .gold-wrapper {
    display: flex;
    align-items: center;

    span {
      margin-left: 0.5rem;
    }

    .gold-icon {
      width: 1.5rem;
      opacity: 0.57;
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