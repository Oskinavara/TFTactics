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
    this.$bus.$off('value-changed')
  }
}
