<template>
  <div id="app">
    <TheHeader></TheHeader>
    <transition name="fade">
      <MobileMenu v-if="menuOpened"></MobileMenu>
    </transition>
    <nuxt />
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from '../components/organisms/TheHeader'
import TheFooter from '../components/organisms/TheFooter'
import layoutLogic from '@/logic/layoutLogic.js'

export default {
  name: 'Default',

  components: {
    TheHeader,
    TheFooter
  },

  mixins: [layoutLogic]
}
</script>

<style lang="scss">
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
