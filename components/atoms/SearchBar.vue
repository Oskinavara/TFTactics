<template>
  <div class="search-bar">
    <img 
      src="https://rerollcdn.com/search-icon.svg" 
      alt="search icon" 
      class="search-bar__icon"
    />
    <input
      :value="userInput"
      @input="emitValue"
      type="text" 
      placeholder="Search by name, origin, or class..." 
      class="search-bar__input"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: ''
    }
  },
  methods: {
    emitValue() {
      this.userInput = event.target.value;
      this.$bus.$emit('valueChanged', this.userInput);
    }
  },
}
</script>
<style lang="scss" scoped>
.search-bar {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid $border-color;
  transition: all 0.3s;
  height: 35px;
  width: 300px;
  &:active,
  &:focus-within {
    border: 1px solid $orange-accent;
  }
  &__icon {
    height: 12px;
    width: 12px;
    margin-right: 1rem;
  }
  &__input {
    appearance: none;
    background: transparent;
    outline: none;
    border: none;
    width: 80%;
    color: white;
    caret-color: white;
    &::placeholder {
      color: $textgray;
      font-family: 'Sofia Pro Medium';
      font-size: 1.4rem;
    }
  }
}
</style>