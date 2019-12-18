<template>
  <div class="item-listing">
    <h3 class="item-listing__heading">
      <slot/>
    </h3>
    <div class="item-listing__content">
      <item-icon v-for="item in items" :item="item" :key="item"/>
    </div>
  </div>
</template>

<script>
  import ItemIcon from '@/components/atoms/icons/ItemIcon.vue';

  export default {
    components: {
      ItemIcon,
    },

    props: {
      items: {
        type: Object,
        required: true
      },
    },
  }
</script>

<style lang="scss" scoped>
  .item-listing{
    &__heading{
      font-size: 1.6rem;
      color: $textwhite;
      
    }

    &__content{
      display: flex;
      flex-wrap: wrap;

      .item-icon{
        margin: 0.75rem;
        max-height: 4rem;
        max-width: 4rem;        
      }
    }
  }
</style>