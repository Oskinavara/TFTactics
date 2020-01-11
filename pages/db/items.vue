<template>
  <div class="database-champion-items">
    <p
      class="database-description"
    >Find a list of all the Items in Teamfight Tactics with their corresponding Stats, Recipes, and Builds.</p>
    <div class="database-champion-items__category-wrapper">
      <div
        class="database-champion-items__category"
        :class="{'database-champion-items__category--active' : currentCategory === category}"
        v-for="category in Object.keys(columns)"
        @click="currentCategory = category"
      >{{category}}</div>
    </div>

    <custom-table :columns="columns.all" :tableData="items" v-if="currentCategory === 'all'">
      <template v-slot:[columns.all[0].name]="{row}">
        <router-link :to="`/item-builder`" class="database-champion-items__item-link">
          <item-icon :item="row" />
          <span>{{row.name}}</span>
        </router-link>
      </template>
      <template v-slot:[columns.all[1].name]="{row}">
        <span>{{row.bonus}}</span>
      </template>
      <template v-slot:[columns.all[2].name]="{row}">
        <div class="database-champion-items__item-wrapper">
          <item-icon
            v-for="item in row.buildsInto"
            :key="item"
            :item="items[item]"
            class="item-icon--small"
          />
        </div>
      </template>
      <template v-slot:[columns.all[3].name]="{row}">
        <div class="database-champion-items__item-wrapper">
          <item-icon
            v-for="(item, index) in row.buildsFrom"
            :key="index"
            :item="items[item]"
            class="item-icon--small"
          />
        </div>
      </template>
    </custom-table>

    <custom-table :columns="columns.base" :tableData="baseItems" v-if="currentCategory === 'base'">
      <template v-slot:[columns.base[0].name]="{row}">
        <router-link :to="`/item-builder`" class="database-champion-items__item-link">
          <item-icon :item="row" />
          <span>{{row.name}}</span>
        </router-link>
      </template>
      <template v-slot:[columns.base[1].name]="{row}">
        <span>{{row.bonus}}</span>
      </template>
      <template v-slot:[columns.base[2].name]="{row}">
        <div class="database-champion-items__item-wrapper">
          <item-icon
            v-for="item in row.buildsInto"
            :key="item"
            :item="items[item]"
            class="item-icon--small"
          />
        </div>
      </template>
    </custom-table>

    <custom-table
      :columns="columns.combined"
      :tableData="combinedItems"
      v-if="currentCategory === 'combined'"
    >
      <template v-slot:[columns.combined[0].name]="{row}">
        <router-link :to="`/item-builder`" class="database-champion-items__item-link">
          <item-icon :item="row" />
          <span>{{row.name}}</span>
        </router-link>
      </template>
      <template v-slot:[columns.combined[1].name]="{row}">
        <span>{{row.bonus}}</span>
      </template>
      <template v-slot:[columns.combined[2].name]="{row}">
        <div class="database-champion-items__item-wrapper">
          <item-icon
            v-for="(item, index) in row.buildsFrom"
            :key="index"
            :item="items[item]"
            class="item-icon--small"
          />
        </div>
      </template>
    </custom-table>
  </div>
</template>

<script>
import CustomTable from '@/components/organisms/CustomTable.vue'
import ItemIcon from '@/components/atoms/icons/ItemIcon.vue'
import { mapState } from 'vuex'

export default {
  name: 'DatabaseItems',

  layout: 'database',

  data() {
    return {
      currentCategory: 'all',
      columns: {
        all: [
          {
            name: 'Item',
            width: 15,
            position: 'flex-start'
          },
          {
            name: 'Bonus',
            width: 18,
            position: 'flex-start'
          },
          {
            name: 'Combine Into',
            width: 12,
            position: 'center'
          },
          {
            name: 'Recipe',
            width: 8,
            position: 'center'
          }
        ],
        base: [
          {
            name: 'Item',
            width: 15,
            position: 'flex-start'
          },
          {
            name: 'Bonus',
            width: 18,
            position: 'flex-start'
          },
          {
            name: 'Combine Into',
            width: 12,
            position: 'center'
          }
        ],
        combined: [
          {
            name: 'Item',
            width: 15,
            position: 'flex-start'
          },
          {
            name: 'Bonus',
            width: 18,
            position: 'flex-start'
          },
          {
            name: 'Recipe',
            width: 8,
            position: 'center'
          }
        ]
      }
    }
  },

  components: {
    ItemIcon,
    CustomTable
  },

  computed: {
    ...mapState({
      items: state => state.apiData.items
    }),
    baseItems() {
      let items = { ...this.items }
      for (let item in items) {
        if (items[item].depth === 2) {
          delete items[item]
        }
      }
      return items
    },
    combinedItems() {
      let items = { ...this.items }
      for (let item in items) {
        if (items[item].depth === 1) {
          delete items[item]
        }
      }
      return items
    }
  }
}
</script>

<style lang="scss" scoped>
.database-champion-items {
  span {
    margin-left: 1rem;
  }

  .item-icon {
    margin: 0;
    height: 4rem;
    width: 4rem;
    min-width: 4rem;

    &--small {
      min-width: unset;
      height: 3rem;
      width: 3rem;
      margin: 0.5rem;
    }
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

  &__item-link {
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

  &__item-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>