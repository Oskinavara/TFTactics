<template>
  <div class="database-page page">
    <div class="database-page__inner inner">
      <div class="database-page__sidebar sidebar">
        <page-heading>Lists</page-heading>
        <divider />
        <tierlist-side-navbar />
        <slot name="championFilters"></slot>
        <divider />
        <disclaimer />
      </div>
      <div class="database-page__main">
        <page-heading>
          <slot name="title" />
          <template #content>
            <search-bar />
          </template>
        </page-heading>
        <divider></divider>
        <div class="database-page__tierlist">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>