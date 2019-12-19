<template>
  <table class="custom-table">
    <thead class="custom-table__head">
      <tr class="custom-table__row">
        <th 
          class="custom-table__cell custom-table__cell--header" 
          v-for="(name,index) in colNames" 
          :key="index"
        >
          {{name}}
        </th>
      </tr>
    </thead>

    <tbody class="custom-table__body">
      <tr class="custom-table__row" 
        v-for="(tableRow, index) in content" 
        :key="index"
      >
        <th 
          v-for="(tableCell,index2) in colNames" 
          :key="index2"
          class="custom-table__cell"
        >
          <slot>
            {{tableCell}}
          </slot>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      colNumber: {
        type: Number,
        default: 3,
        required: false
      },
      colNames: {
        type: Array,
        required: true
      },
      content: {
        type: Object
      }
    },
    
    computed: {
      tableTest() {
        return [
          {icons: 'aishfiuasf', description: 'lorem ipsum asfdsafasfasfaf', tier: 'a'},
          {icons: 'aishfiuasf', description: 'lorem ipsum asfdsafasfasfaf', tier: 'b'},
          {icons: 'aishfiuasf', description: 'lorem ipsum asfdsafasfasfaf', tier: 'c'},
          {icons: 'aishfiuasf', description: 'lorem ipsum asfdsafasfasfaf', tier: 'd'},
          {icons: 'aishfiuasf', description: 'lorem ipsum asfdsafasfasfaf', tier: 'e'},
          ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .custom-table{
    width: 100%;
    border-collapse: collapse;
    border-left: 1px solid $border-color;
    border-right: 1px solid $border-color;

    &__head{
      min-width: 100%;
      border: 1px solid $border-color;
    }

    &__row{
      border-bottom: 1px solid $border-color;
    }

    &__cell{
      padding: 1rem;
      &:not(:last-of-type){
        text-align: left;
      }
      &:last-of-type{
        text-align: center;
      }
      &--header{
        color: $textgray;
        font-weight: 600;
      }
    }
  }
</style>