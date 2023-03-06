<template>
  <div class="product">
    <div class="product-left">
      <img :src="product.image" :alt="product.name">
    </div>
    <div class="product-right">
      <h3 class="product-right-title">{{ product.name }}</h3>
      <span class="product-right-price">£{{ product.price }}</span>
      <div class="product-right-description">
        <h4 class="product-right-description__title">Product description</h4>
        <div class="product-right-description__text" v-html="product.description"></div>
      </div>
      <div class="product-right-params">
        <div class="product-right-param" v-for="(param, i) in product.params" :key="i">
          <div class="product-right-param__title">{{ param.title }}:</div>
          <div class="product-right-param__text">{{ param.value }}</div>
        </div>
      </div>
      <div class="product-right-quantity">
        <div class="product-right-quantity-left">
          <h4 class="product-right-quantity__title">Quantity</h4>
        <div class="product-right-quantity__block">
          <div class="product-right-quantity__image" @click="quantityCount('minus')">
            <img src="/svg/minus.svg" alt="minus">
          </div>
          <div class="product-right-quantity__value">{{ quantity }}</div>
          <div class="product-right-quantity__image" @click="quantityCount('plus')">
            <img src="/svg/plus.svg" alt="plus">
          </div>
        </div>
        </div>
        <div class="product-right-quantity-right">
          <ui-button
          :color="'#ffffff'"
          :width="'143px'"
          @click="cartStore.addToCart(product, quantity)">Add to cart</ui-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UiButton from '@/components/UI/UiButton.vue'

import { ref } from 'vue'
import { useCartStore } from '@/store/cart.js'

const props = defineProps({
  product: {
    type: Object,
    default: () => {},
    required: true,
  }
})

const quantity = ref(1)
const cartStore = useCartStore()

const quantityCount = (type) => {
  if(type === 'minus') {
    quantity.value === 1 ? quantity.value : quantity.value--
  } else if (type === 'plus') {
    quantity.value === 3 ? quantity.value : quantity.value++
  }
}

</script>

<style lang="scss" scoped>
.product {
  background: #F9F9F9;
  padding: 50px 80px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2,minmax(300px, auto));
  column-gap: 65px;
  @media screen and (max-width: 390px) {
      display: flex;
      flex-direction: column;
      padding: 0px;
  }
  &-left {
    & img {
      max-width: 100%;
    }
  }
  &-right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media screen and (max-width: 390px) {
      padding: 24px;
      }
    &-title {
      font-family: var(--clash);
      font-weight: 400;
      font-size: 36px;
      line-height: 44px;
      color: var(--darkPrimary);
      margin: 0 0 16px;
      @media screen and (max-width: 390px) {
      font-size: 24px;
      margin: 0 0 12px;
      }
    }
    &-price {
      font-size: 24px;
      line-height: 32px;
      display: block;
      padding: 0 0 28px;
      border-bottom: 1px solid #EBE8F4;
      margin: 0 0 24px;
      @media screen and (max-width: 390px) {
        padding: 0 0 16px;
  }
    }
     &-description {
      max-width: 500px;
      line-height: 22px;
      @media screen and (max-width: 390px) {
        font-size: 14px;
  }
      &__title {
        font-family: var(--clash);
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin: 0 0 14px;
        color: var(--darkPrimary);
      }
     }
     &-params {
      display: flex;
      flex-direction: column;
     }
     &-param {
      display: flex;
      align-items: center;
      margin: 0px 0px 10px;
      &__title {
        font-size: 20px;
        margin-right: 20px;
        @media screen and (max-width: 390px) {
          font-size: 16px;
  }
      }
     }
     &-quantity{
      margin: 40px 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 390px) {
        flex-direction: column;
  }
      &__title {
        font-family: var(--clash);
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: var(--darkPrimary);
        margin: 0 0 12px;
      }
      &__block {
        background: #ffffff;
        width: 122px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        @media screen and (max-width: 390px) {
        justify-content: space-between;
        margin: 0 0 20px;
  }
      }
      &__image {
        width: 10px;
        cursor: pointer;
      }
     }
  }
}
</style>