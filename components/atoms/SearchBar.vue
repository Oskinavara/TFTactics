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
      type="search" 
      placeholder="Search by name, origin, or class..." 
      class="search-bar__input"
    />

    <div class="search-bar__cancel">
      <div class="search-bar__cancel-icon"/>
    </div>
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
      this.$bus.$emit('value-changed', this.userInput);
    },
  },
}
</script>
<style lang="scss" scoped>
.search-bar {
  display: flex;
  position: relative;
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
    width: 110%;
    color: white;
    caret-color: white;
    overflow: visible;
    &::placeholder {
      color: $textgray;
      font-family: 'Sofia Pro Medium';
      font-size: 1.4rem;
    }
    &::-webkit-search-cancel-button{
      position: absolute;
      right: 0;
      cursor: pointer;
      background-color: green;
    }
  }
}
</style>