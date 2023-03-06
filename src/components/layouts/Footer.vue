<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-menu">
        <div class="footer-column">
          <h4 class="footer-column__title">Menu</h4>
          <router-link to="/" class="footer-column__link">New arrivals</router-link>
          <router-link to="/" class="footer-column__link">Best sellers</router-link>
          <router-link to="/" class="footer-column__link">Recently viewed</router-link>
          <router-link to="/" class="footer-column__link">Popular this week</router-link>
          <router-link to="/" class="footer-column__link">All products</router-link>
        </div>
        <div class="footer-column">
          <h4 class="footer-column__title">Categories</h4>
          <router-link to="/" class="footer-column__link">Crockery</router-link>
          <router-link to="/" class="footer-column__link">Furniture</router-link>
          <router-link to="/" class="footer-column__link">Homeware</router-link>
          <router-link to="/" class="footer-column__link">Plant pots</router-link>
          <router-link to="/" class="footer-column__link">Chairs</router-link>
          <router-link to="/" class="footer-column__link">Crockery</router-link>
        </div>
        <div class="footer-column">
          <h4 class="footer-column__title">Our company</h4>
          <router-link to="/" class="footer-column__link">About us</router-link>
          <router-link to="/" class="footer-column__link">Vacancies</router-link>
          <router-link to="/" class="footer-column__link">Contact us</router-link>
          <router-link to="/" class="footer-column__link">Privacy</router-link>
          <router-link to="/" class="footer-column__link">Returns policy</router-link>
        </div>
      </div>
      <div class="footer-subscribe">
        <h4 class="footer-subscribe__title">Join our mailing list</h4>
        <form action="#" class="footer-subscribe__form">
          <ui-input
          :width="'500px'"
          :background="'rgba(255, 255, 255, 0.15)'"
          :color="'#ffffff'"/>
          <ui-button
          :background="'#ffffff'"
          :color="'var(--darkPrimary)'">Sign up</ui-button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copyright">
        <p>Copyright 2022 Avion LTD</p>
      </div>
      <div class="footer-socials">
        <router-link to="/" class="footer-social">
          <img src="/svg/footer/linkedin.svg" alt="linkedin">
        </router-link>
        <router-link to="/" class="footer-social">
          <img src="/svg/footer/facebook.svg" alt="facebook">
        </router-link>
        <router-link to="/" class="footer-social">
          <img src="/svg/footer/instagram.svg" alt="instagram">
        </router-link>
        <router-link to="/" class="footer-social">
          <img src="/svg/footer/skype.svg" alt="skype">
        </router-link>
        <router-link to="/" class="footer-social">
          <img src="/svg/footer/twitter.svg" alt="twitter">
        </router-link>
        <router-link to="/" class="footer-social">
          <img src="/svg/footer/pinterest.svg" alt="pinterest">
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
import UiButton from '@/components/UI/UiButton.vue';
import UiInput from '@/components/UI/UiInput.vue';
</script>

<style lang="scss" scoped>
.footer {
  background: var(--darkPrimary);
  padding: 58px 80px 0;
  @media screen and (max-width: 390px) {
      padding: 40px 25px;
  }
  &-top {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #4E4D93;
    @media screen and (max-width: 390px) {
      flex-wrap: wrap;
  }
  }
  &-menu {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    @media screen and (max-width: 390px) {
      flex-wrap: wrap;
  }
  }
  &-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 100px;
    color: #ffffff;
    @media screen and (max-width: 390) {
      margin-right: 10px;
    }
    &__title {
      font-family: var(--clash);
      line-height: 20px;
      margin-bottom: 12px;
    }
    &__link {
      color: #ffffff;
      text-decoration: none;
      line-height: 19px;
      transition: .3s ease;
      &:hover {
        opacity: .7;
      }
      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }
  &-subscribe {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 390px) {
          max-width: 320px;
        }
    &__title{
      font-family: var(--clash);
      font-weight: 400;
      line-height: 20px;
      color: #ffffff;
    }
    &__form {
      display: flex;
      align-items: center;
    }
  }
  &-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
  }
  &-copyright {
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
    & p {
      @media screen and (max-width: 390px) {
          text-align: center;
        }
    }

  }
  &-socials {
    @media screen and (max-width: 390px) {
          display: none;
        }
  }
  &-social {
    &:not(:last-child) {
      margin-right: 24px;
    }
    transition: .3s ease;
    &:hover {
      opacity: .7;
    }
  }
}
</style>