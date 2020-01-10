<template>
  <div>
    <p
      class="database-description"
    >Find a list of all the Classes in Teamfight Tactics with their corresponding Bonuses and Champions.</p>
    <custom-table :columns="columns" :tableData="origins">
      <template v-slot:[columns[0].name]="{row}">
        <img :src="originUrl(row)" :alt="`${row.name} icon`" class="origin-icon" />
        <span>{{row.name}}</span>
      </template>
      <template v-slot:[columns[1].name]="{row}">
        <p class="class-description">{{row.description}}</p>
        <div class="bonus" v-for="bonus in row.bonuses" :key="bonus.needed">
          <div class="bonus__number">{{bonus.needed}}</div>
          <p class="bonus__description">{{bonus.effect}}</p>
        </div>
      </template>
      <template v-slot:[columns[2].name]="{row}">
        <div class="champion-list">
          <champion-icon
            v-for="champion in originChampions(row)"
            :key="champion.name"
            :champion="champion"
          />
        </div>
      </template>
    </custom-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CustomTable from '@/components/organisms/CustomTable.vue'
import ChampionIcon from '@/components/atoms/icons/ChampionIcon.vue'

export default {
  layout: 'database',

  components: {
    CustomTable,
    ChampionIcon
  },

  data() {
    return {
      columns: [
        {
          name: 'Origin',
          width: 10,
          position: 'flex-start'
        },
        {
          name: 'Bonus',
          width: 20,
          position: 'flex-start',
          direction: 'column'
        },
        {
          name: 'Units',
          width: 10,
          position: 'flex-start'
        }
      ]
    }
  },

  computed: {
    ...mapState({
      origins: state => state.apiData.origins,
      champions: state => state.apiData.champions
    })
  },

  methods: {
    originUrl(origin) {
      return `https://rerollcdn.com/icons/${origin.key.toLowerCase()}.png`
    },
    originChampions(origin) {
      let champions = { ...this.champions }
      for (let champion in champions) {
        if (!champions[champion].origin.includes(origin.name)) {
          delete champions[champion]
        }
      }
      return champions
    }
  }
}
</script>

<style lang="scss" scoped>
.class-description {
  color: $textgray;
  font-size: 1.5rem;
  line-height: 1.5;
}

.champion-list {
  display: flex;
  flex-wrap: wrap;
  .champion-icon {
    height: 3rem;
    width: 3rem;
    margin: 0.5rem;
  }
}

.origin-icon {
  height: 2.2rem;
  width: 2.2rem;
  margin-right: 1rem;
}
.bonus {
  display: flex;
  align-items: center;
  margin: 1rem 0;

  &__number {
    height: 2.5rem;
    min-height: 2.5rem;
    width: 2.5rem;
    min-width: 2.5rem;
    display: flex;
    color: $textgray;
    font-weight: 600;
    font-size: 1.4rem;
    justify-content: center;
    align-items: center;
    border: 1px solid $border-color;
    border-radius: 50%;
    margin-right: 1.5rem;
  }

  &__description {
    color: $white;
  }
}
</style>