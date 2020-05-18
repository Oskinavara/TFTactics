import MobileMenu from '../components/molecules/Header/MobileMenu'

export default {
  components: {
    MobileMenu
  },

  computed: {
    menuOpened() {
      return this.$store.state.mobileMenuOpened
    }
  },

  mounted() {
    Object.keys(this.$store.state.apiData).forEach(category =>
      this.$store.dispatch('fetchData', category)
    )
  }
}