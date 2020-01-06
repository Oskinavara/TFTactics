<template>
  <li 
    :key="synergy"
    class="champion-page__synergy" 
  >
    <img 
      :src="originSrc(synergy)" 
      :alt="`${synergy} icon`" 
      class="champion-page__synergy-icon"
    >
    <champion-icon 
      v-for="icon in originSynergyChampions(synergy)"
      :key="icon.name"
      :champion="icon"
    />
  </li>
</template>

<script>
  export default {
    props: {
      origin: {
        type: Object,
        required: true
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>