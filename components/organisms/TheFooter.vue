<template functional>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem 0;
  }

  &__link {
    font-size: 1.6rem;
    text-decoration: none;
    color: $textgray;
    font-weight: 600;
    font-weight: 100;
    transition: all 0.3s;
    margin: 2rem 3rem;
    @include hover-lighten;
  }

  &__about {
    color: $textwhite;
    font-size: 1.4rem;
    text-align: center;
    border-top: 1px solid $border-color;
    padding: 3rem 0;
    line-height: 3rem;
    font-weight: 400;
    margin: 0 2rem;
  }
}
</style>