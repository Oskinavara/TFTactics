<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="(column,index) in columns"
          :key="index"
          :style="cellStyles(index)"
        >{{column.name}}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(row, index) in tableData" :key="index">
        <td v-for="(column, index2) in columns" :key="column.name" :style="cellStyles(index2)">
          <slot :name="column.name" :row="row" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'CustomTable',

  props: {
    columns: {
      type: Array,
      required: true
    },
    tableData: {
      required: true
    }
  },

  methods: {
    cellStyles(index) {
      return {
        width: `${this.columns[index].width}rem`,
        flex: `${this.columns[index].width} 0 auto`,
        display: 'flex',
        justifyContent: this.columns[index].direction
          ? 'center'
          : this.columns[index].position,
        flexDirection: this.columns[index].direction
          ? this.columns[index].direction
          : '',
        alignItems: this.columns[index].direction
          ? this.columns[index].position
          : ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  border-left: 1px solid $border-color;
  border-right: 1px solid $border-color;

  thead {
    border: 1px solid $border-color;
    border-bottom: 0 !important;
  }

  tbody {
    tr:nth-of-type(odd) {
      background: $dark-gray;
    }
  }

  tr {
    width: 100%;
    border-bottom: 1px solid $border-color;
    display: flex;
  }

  th,
  td {
    padding: 1rem;
    display: flex;
    align-items: center;

    &:first-of-type {
      padding-left: 2rem;
    }

    &:not(:last-of-type) {
      text-align: left;
    }

    &:last-of-type {
      text-align: center;
      padding-right: 2rem;
    }
  }

  th {
    color: $textgray;
    font-weight: 600;
  }
}
</style>