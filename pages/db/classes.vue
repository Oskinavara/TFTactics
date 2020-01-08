<template>
  <div>
    <p
      class="database-description"
    >Find a list of all the Classes in Teamfight Tactics with their corresponding Bonuses and Champions.</p>
    <custom-table :columns="columns" :tableData="champions" v-if="currentCategory === 'offense'">
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
  </div>
</template>

<script>
export default {
  layout: 'database'
}
</script>

<style lang="scss" scoped>
</style>