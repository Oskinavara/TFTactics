<template>
  <table>
    <thead>
      <tr>
        <th v-for="(name,index) in columnNames" :key="index">
          {{name}}
        </th>
      </tr>
    </thead>

    <tbody>
      <slot/>
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
      columnNames: {
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
  table{
    width: 100%;
    border-collapse: collapse;
    border-left: 1px solid $border-color;
    border-right: 1px solid $border-color;

    thead{
      border: 1px solid $border-color;
    }

    tr{
      width: 100%;
      border-bottom: 1px solid $border-color;
      display: flex;
      justify-content: space-between;
    }

    td, th{
      padding: 1rem;
      display: flex;
      &:not(:last-of-type){
        text-align: left;
      }
      &:last-of-type{
        text-align: center;
      }
    }
    th{
      color: $textgray;
      font-weight: 600;
    }
  }
</style>