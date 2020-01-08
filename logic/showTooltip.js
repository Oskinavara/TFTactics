export default {
  data() {
    return {
      hover: false
    }
  },

  methods: {
    toggleHover() {
      setTimeout(() => {
        this.hover = !this.hover
      }, 200)
    }
  }
}
