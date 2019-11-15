<template>
  <div class="wrapper">
    <item-icon :item="items.bloodthirster" />
    <item-icon :item="items.bfsword" />
    <item-icon :item="items.spatula" />
    <item-icon :item="items.warmogsarmor" />
  </div>
</template>

<script>
import ItemIcon from '@/components/atoms/icons/ItemIcon.vue'
import { mapState } from 'vuex'
export default {
  components: {
    ItemIcon
  },
  computed: mapState(['items'])
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 20rem;
  display: flex;
}
</style>