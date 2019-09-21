<template>
  <footer class="the-footer">
    <div class="the-footer__inner">
      <div class="the-footer__navbar">
        <a href="#" class="the-footer__link">Privacy Policy</a>
        <a href="#" class="the-footer__link">Contact</a>
        <a href="#" class="the-footer__link">Manage Cookie Settings</a>
      </div>
      <p
        class="the-footer__about"
      >TFTACTICS.GG isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.the-footer {
  background: $dark-gray;
  border-top: 2px solid $border-color;
  margin-top: 8rem;
  &__inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  &__navbar {
    margin: 0 auto;
    width: 40%;
    display: flex;
    justify-content: space-between;
    padding: 3rem 0;
  }
  &__link {
    font-size: 1.6rem;
    text-decoration: none;
    color: $textgray;
    font-family: 'Sofia Pro Medium';
    font-weight: 100;
    transition: all 0.3s;
    @include hover-lighten;
  }
  &__about {
    color: $textwhite;
    font-size: 1.4rem;
    text-align: center;
    border-top: 1px solid $border-color;
    padding: 3rem 0;
    line-height: 3rem;
    font-family: 'Sofia Pro Light';
  }
}
</style>