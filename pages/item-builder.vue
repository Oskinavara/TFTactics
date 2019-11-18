<template>
  <div class="item-builder-page page">
    <div class="item-builder-page__inner inner">
      <div class="item-builder-page__sidebar sidebar">
        <champion-filters/>
      </div>
      <div class="item-builder-page__wrapper">
        <page-heading>
          Teamfight Tactics Item Builder Cheat Sheet
          <template v-slot:content>
            <search-bar />
          </template>
        </page-heading>
        <div class="item-builder-page__champion-grid">
          <!-- <div
            class="item-builder-page__champion-block"
            v-for="champion in filteredChampions(Object.keys(champions))"
            :key="champion.key"
          >
            <champion-icon :champion="champions[champion]" v-size="55" />
            <p class="item-builder-page__champion-name">{{champions[champion].name}}</p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

  computed: mapState({
    items: state => state.apiData.items
  })
}
</script>

<style lang="scss" scoped>

</style>