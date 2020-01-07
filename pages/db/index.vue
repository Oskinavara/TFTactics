<template>
  <div class="index"></div>
</template>

<script>
export default {
  mounted() {
    this.$router.push('/db/champions')
  }
}
</script>

<style lang="scss" scoped>
.index {
  height: 90vh;
}
</style>