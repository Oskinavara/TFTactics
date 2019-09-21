<template>
  <div>
    <TheHeader></TheHeader>
    <nuxt />
    <!-- <TheFooter></TheFooter> -->
  </div>
</template>

<script>
import TheHeader from '../components/organisms/TheHeader'
import TheFooter from '../components/organisms/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  },
  created() {
    this.$store.dispatch('fetchData', 'champions')
    this.$store.dispatch('fetchData', 'items')
    this.$store.dispatch('fetchData', 'classes')
    this.$store.dispatch('fetchData', 'origins')
    this.$store.dispatch('fetchData', 'tierlist')
  }
}
</script>
<style>
html {
  font-family: 'Sofia Pro Medium';
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  box-sizing: border-box;
  font-size: 1.6rem;
}

*,
*::after,
*::before {
  box-sizing: inherit;
  font-family: 'Sofia Pro Medium';
  margin: 0;
  padding: 0;
}
</style>
