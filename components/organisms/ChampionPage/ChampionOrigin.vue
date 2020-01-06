<template>
  <section class="champion-origin">
    <img :src="originUrl" :alt="originAlt" class="champion-origin__icon">
    <div class="champion-origin__data">
      <h2>{{origin.name}}</h2>
      <h4>{{type}}</h4>
      <p class="champion-origin__description">{{origin.description}}</p>
      <ul class="champion-origin__bonuses">
        <li 
          v-for="bonus in origin.bonuses" 
          :key="bonus.needed"
          class="champion-origin__bonus" 
        >
          <div class="champion-origin__number">{{bonus.needed}}</div>
          <div class="champion-origin__bonus-text">{{bonus.effect}}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
  export default {
    props: {
      origin: {
        type: Object,
        required: true
      },
      type: {
        type: String
      }
    },

    computed: {
      ...mapState({
        origins: state => state.apiData.origins,
        classes: state => state.apiData.classes
      }),
      originUrl() {
        return this.origin ? `https://rerollcdn.com/icons/${this.origin.key}.png` : ''
      },
      originAlt() {
        return this.origin ? `${this.origin.key} splash art` : ''
      }
    }

  }
</script>

<style lang="scss" scoped>
  .champion-origin{
    padding-top: 3rem;
    margin-bottom: 3rem;
    border-top: 1px solid $border-color;
    display: flex;

    &__icon{
      height: 3.2rem;
      width: 3rem;
    }
    
    &__data{
      margin-left: 3rem;
    }

    h2{
      margin-bottom: 0.5rem;
    }

    h4{
      color: $textgray;
      font-weight: normal;
    }

    &__description{
      margin: 1rem 0;
    }

    &__bonuses{
      list-style-type: none;
    }

    &__bonus{
      display: flex;
      align-items: center;
      margin: 1rem auto;
    }

    &__number{
      height: 3rem;
      width: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $border-color;
      border-radius: 50%;
      line-height: 3rem;
      color: $textgray;
      font-weight: 700;
      margin-right: 1.5rem;
    }
  }
</style>