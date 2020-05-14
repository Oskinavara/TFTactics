<template>
  <div class="index"></div>
</template>

<script>
export default {
  mounted() {
    this.$router.push({
      path: '/tierlist/champions',
      name: 'tierlist-champions',
      params: { heading: 'Champions' }
    })
  }
}
</script>

<style lang="scss" scoped>
.index {
  height: 90vh;
}
</style>
