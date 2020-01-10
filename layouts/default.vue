<template>
  <div>
    <TheHeader></TheHeader>
    <nuxt />
    <TheFooter></TheFooter>
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
  mounted() {
    Object.keys(this.$store.state.apiData).map(category =>
      this.$store.dispatch('fetchData', category)
    )
  }
}
</script>
<style lang="scss" >
html {
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  box-sizing: border-box;
  font-size: 1.6rem;
  background: $gray;
}

*,
*::after,
*::before {
  box-sizing: inherit;
  font-family: 'Sofia Pro';
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $textwhite;
}

h2 {
  font-size: 2.1rem;
}

h4 {
  font-size: 1.6rem;
}
</style>
