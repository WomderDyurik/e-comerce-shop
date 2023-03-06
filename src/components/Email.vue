<template>
  <div class="email">
    <div class="email-column">
      <h3 class="email-column__title">Join the club and get the benefits</h3>
      <p class="email-column__text">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
      <div class="email-column__checks">
        <div class="email-column__check">
          <div class="email-column__check-image">
            <img src="/svg/checkforemail.svg" alt="">
          </div>
          <p class="email-column__check-text">Exclusive offers</p>
        </div>
        <div class="email-column__check">
          <div class="email-column__check-image">
            <img src="/svg/checkforemail.svg" alt="">
          </div>
          <p class="email-column__check-text">Free events</p>
        </div>
        <div class="email-column__check">
          <div class="email-column__check-image">
            <img src="/svg/checkforemail.svg" alt="">
          </div>
          <p class="email-column__check-text">Large discounts</p>
        </div>
      </div>
      <form action="#" class="email-column__subscribe">
        <ui-input/>
        <ui-button
        :color="'#ffffff'">
          Sign up
        </ui-button>
      </form>
    </div>
  </div>
</template>

<script setup>
import UiButton from '@/components/UI/UiButton.vue';
import UiInput from '@/components/UI/UiInput.vue';
</script>


<style lang="scss" scoped>
  .email {
    background: url('/image/email.jpg');
    background-size: cover;
    padding: 97px 0 86px;
    background-size: cover;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 390px) {
      padding: 24px;
  }
    &-column {
      color: #FFFFFF;
      text-align: center;
      max-width: 500px;
      @media screen and (max-width: 390px) {
        text-align: left;
      }
      &__title {
        font-family: var(--clash);
        font-weight: 400;
        font-size: 32px;
        line-height: 140%;
        margin-top: 12px;
        @media screen and (max-width: 390px) {
      font-size: 24px;
  }
      }
      &__text {
        font-size: 18px;
        max-width: 470px;
        line-height: 150%;
        @media screen and (max-width: 390px) {
      font-size: 14px;
  }
      }
      &__checks {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 30px 0 40px;
        @media screen and (max-width: 390px) {
          margin: 20px 0 28px;
          flex-direction: column;
          align-items: flex-start;
        }
      }
      &__check {
        display: flex;
        align-items: center;
        &:not(:last-child) {
          margin-right: 36px;
        }
        &-image {
          margin-right: 8px;
        }
        &-text {
          line-height: 150%;
        }
        @media screen and (max-width: 390px) {
      &:not(:last-child) {
          margin-right: 0;
        }
  }
      }
      &__subscribe {
        display: flex;
        align-items: center;
        @media screen and (max-width: 390px) {
          max-width: 342px;
        }
      }
    }
  }
</style>