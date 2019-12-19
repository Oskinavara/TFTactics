<template>
  <div class="item-listing">
    <div class="item-listing__heading-wrapper">
      <h3 class="item-listing__heading">
        <slot/>
      </h3>
    </div>
    <div class="item-listing__content">
      <item-icon 
        v-for="item in items" 
        :item="item" 
        :key="item.name"
        @click.native="selectItem(item)"
        :class="{'item-icon--selected': selectedItem === item}"
      />
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
      selectedItem: {
        type: Object,
        required: false
      }
    },

    methods: {
      selectItem(item) {
        this.$emit('set-item', item);
      }
    },
  }
</script>

<style lang="scss">
  .item-listing{
    &__heading-wrapper{
      margin: 2rem 0 1rem 0;
      width: 100%;
      border-bottom: 1px solid $border-color;
    }

    &__heading{
      font-size: 1.6rem;
      line-height: 1.6rem;
      color: $textwhite;
      display: inline-block;
      border-bottom: 4px solid $orange-accent;
      padding: 0 1rem 1rem 1rem;  
    }

    &__content{
      display: flex;
      flex-wrap: wrap;

      .item-icon{
        margin: 0.75rem 0.5rem;
        max-height: 4rem;
        max-width: 4rem;
        opacity: 0.5;
        transition: opacity 0.3s;        
        &:hover{
          opacity: 1;
        }

        &--selected{
          opacity: 1;
          .item-icon__image{
            border: 1px solid $orange-accent;
          }
        }
      }
    }
  }
</style>