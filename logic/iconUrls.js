export default {
  computed: {
    originUrl() {
      return this.origin
        ? `https://rerollcdn.com/icons/${this.origin.key}.png`
        : ''
    },
    originAlt() {
      return this.origin ? `${this.origin.key} splash art` : ''
    },
    itemUrl() {
      let name = this.item.name
      let nameCapitalized = name.replace(/([.' ])+/g, '')
      return `https://rerollcdn.com/items/${nameCapitalized}.png`
    },
    itemAlt() {
      return `${this.item.name} splash art`
    },
    championUrl() {
      return this.champion
        ? `https://rerollcdn.com/characters/${this.champion.key}.png`
        : ''
    },
    championAlt() {
      return this.champion ? `${this.champion.key} splash art` : ''
    }
  }
}
