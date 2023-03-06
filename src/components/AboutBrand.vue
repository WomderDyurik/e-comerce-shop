<template>
  <div class="about-brand">
    <h3 class="about-brand__title">What makes our brand different</h3>
    <div class="about-brand__items">
      <div
      class="about-brand__item"
      v-for="(item, i) in items" :key="i">
        <div class="about-brand__item-image">
          <img :src="item.image" alt="delivery">
        </div>
        <h4 class="about-brand__item-title">{{item.title}}</h4>
        <p class="about-brand__item-description">{{item.description}}</p>
      </div>
  </div>
  </div>
</template>

<script setup>
const items = [
  {
    title: 'Next day as standard',
    description: 'Order before 3pm and get your order the next day as standard',
    image: '/svg/delivery.svg'
  },
  {
    title: 'Made by true artisans',
    description: 'andmade crafted goods made with real passion and craftmanship',
    image: '/svg/check.svg'
  },
  {
    title: 'Unbeatable prices',
    description: 'For our materials and quality you won’t find better prices anywhere',
    image: '/svg/purchase.svg'
  },
  {
    title: 'Recycled packaging',
    description: 'We use 100% recycled to ensure our footprint is more manageable',
    image: '/svg/sprout.svg'
  },
]
</script>

<style lang="scss" scoped>
  .about-brand {
    margin-bottom: 110px;
    @media screen and (max-width: 390px) {
      margin-bottom: 24px;
  }
    &__title {
    text-align: center;
    margin: 80px 0px 36px;
    font-size: 24px;
    font-weight: 400;
    line-height: 140%;
    @media screen and (max-width: 390px) {
      font-size: 20px;
      margin: 48px 0 36px;
  }
    }
    &__items {
    display: grid;
    grid-template-columns: repeat(4, 305px);
    justify-content: space-between;
    padding: 0px 80px;
    @media screen and (max-width: 390px) {
      display: flex;
      flex-direction: column;
      padding: 10px;
  }
    }
    &__item {
      padding: 48px;
      background: #F9F9F9;
      @media screen and (max-width: 390px) {
        padding: 20px;
        margin-bottom: 26px;
  }
      &-image {
        display: block;
        margin-bottom: 12px;
      }
      &-title {
        font-family: var(--clash);
        font-weight: 400;
        font-size: 20px;
        line-height: 140%;
        margin-bottom: 12px;
      }
      &-description {
        line-height: 150%;
      }
    }
}
</style>