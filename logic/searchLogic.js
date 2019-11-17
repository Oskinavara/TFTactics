export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    updateValue(newValue) {
      this.inputValue = newValue
    }
  },
  mounted() {
    this.$bus.$on('value-changed', this.updateValue)
  },
  beforeDestroy() {
    this.$bus.$off('value-changed');
  }
}

// export default {
//   data() {
//     return {
//       inputValue: ''
//     }
//   },
//   methods: {
//     updateValue(newValue) {
//       this.inputValue = newValue
//     }
//   },
//   mounted() {
//     this.$bus.$on('valueChanged', this.updateValue)
//   },
//   beforeDestroy() {
//     this.$bus.$off('valueChanged');
//   },
//   // computed: {
//   //   filteredData() {
//   //     if (this.inputValue !== '') {
//   //       let newData = Object.keys(dataObject)
//   //         .filter(x => x.includes(this.inputValue))
//   //         .reduce(
//   //           (newData, current) => ((newData[current] = dataObject[current]), newData), {}
//   //         )
//   //       return newData
//   //     }
//   //     else return dataObject
//   //   }
//   // }
// }

