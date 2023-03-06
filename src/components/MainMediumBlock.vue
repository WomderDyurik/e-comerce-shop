<template>
<div class="main-block" :style="{background: background}">
      <div class="main-block__info">
        <h3 :style="{color: colorTitle}" class="main-block__title">{{ title }}</h3>
        <p :style="{color: colorText}" class="main-block__text">{{ text}}</p>
      </div>
      <ui-button :background="btnBackground" :color="btnColor" :type="typeButton" :path="linkPath">{{ link }}</ui-button>
  </div>
</template>

<script setup>
import UiButton from './UI/UiButton.vue';
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  colorTitle: {
    type: String,
    default: '',
  },
  colorText: {
    type: String,
    default: '#5B5676'
  },
  background: {
    type: String,
    default: '#FFFFFF',
  },
  backgroundLink: {
    type: String,
    default: '#F9F9F9',
  },
  colorLink: {
    type: String,
    default: 'var(--darkPrimary)',
  },
  btnBackground: {
    type: String,
    default: '#F9F9F9',
  },
  btnColor: {
    type: String,
    default: 'var(--darkPrimary)',
  },
  typeButton: {
    type: String,
    default: 'button',
  },
  linkPath: {
    type: String,
    required: 'false',
  }
})
</script>

<style lang="scss" scoped>
  .main {
  &-block {
    background: #FFFFFF;
    width: 630px;
    min-height: 444px;
    justify-self: flex-end;
    padding: 48px 56px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 390px) {
      width: 100%;
      padding: 36px 22px;
      min-height: 335px;
  }
    &__title {
      font-family: var(--clash);
      font-size: 32px;
      font-weight: 400;
      line-height: 140%;
      margin-bottom: 20px;
      @media screen and (max-width: 390px) {
      font-size: 24px;
      margin-bottom: 12px;
  }
    }
    &__text {
      font-size: 18px;
      line-height: 150%;
      color: #5B5676;
      @media screen and (max-width: 390px) {
      font-size: 16px;
  }
          }
  }
}
</style>