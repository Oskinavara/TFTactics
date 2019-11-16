const searchLogic = data => ({
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    updateValue(data) {
      this.inputValue = data
    }
  },
  mounted() {
    this.$bus.$on('valueChanged', this.updateValue)
  },
  beforeDestroy() {
    this.$bus.$off('valueChanged');
  },
  computed: {
    filteredData() {
      if (this.inputValue !== '') {
        let newData = Object.keys(data)
          .filter(x => x.includes(this.inputValue))
          .reduce(
            (newData, current) => ((newData[current] = data[current]), newData), {}
          )
        return newData
      } else return data
    }
  }
})

export default searchLogic;
