<template>
<div class="cart" v-if="arr.length || localeCartStore">
  <h3 class="cart-title">Your shopping cart</h3>
  <div class="cart-block" v-if="arr.length">
    <div class="cart-block-header">
      <p class="cart-block-header__title">Product</p>
      <p class="cart-block-header__title">Quantity</p>
      <p class="cart-block-header__title">Total</p>
    </div>
    <div class="cart-block-items">
      <div class="cart-block-item" v-for="(item, i) in cartStore.cart" :key="i">
        <div class="cart-block-item__left">
          <div class="cart-block-item__left-image">
            <img :src="item.image" :alt="item.title">
          </div>
          <div class="cart-block-item__left-info">
            <h4 class="cart-block-item__left-title">{{ item.title }}</h4>
            <!-- <div class="cart-block-item__left-description">{{ item }}</div> -->
            <p class="cart-block-item__left-price">£{{ item.price }}</p>
          </div>
        </div>
        <div class="product-right-quantity">
          <div class="product-right-quantity__block">
            <div class="product-right-quantity__image" @click="item.count === 1 ? item.count : item.count--">
              <img src="/svg/minus.svg" alt="minus">
            </div>
            <div class="product-right-quantity__value">{{ item.count }}</div>
            <div class="product-right-quantity__image" @click="item.count === 3 ? item.count : item.count++">
              <img src="/svg/plus.svg" alt="plus">
            </div>
          </div>
      </div>
      <div class="cart-block-item__price">
          <span>£{{ item.price * item.count }}</span>
          <div class="delete-item">
            <img src="/svg/close.svg" alt="close" @click="cartStore.deletCartItem(item)">
          </div>
        </div>
      </div>
    </div>
    <div class="cart-block-footer">
      <div class="cart-block-footer__content">
        <div class="cart-block-footer__total">
          <p class="cart-block-footer__total-text">Subtotal</p>
          <!-- <span class="cart-block-footer__total-price" v-if="totalPrice2 > 0">£{{ totalPrice2 * cartStore.cart.length }}</span> -->
          <span class="cart-block-footer__total-price">£{{ totalPrice(cartStore.cart) }}</span>
        </div>
        <ui-button :color="'#ffffff'">Go to checkout</ui-button>
      </div>
    </div>
  </div>
  <div class="cart-block" v-else-if="localeCartStore.length">
    <div class="cart-block-header">
      <p class="cart-block-header__title">Product</p>
      <p class="cart-block-header__title">Quantity</p>
      <p class="cart-block-header__title">Total</p>
    </div>
    <div class="cart-block-items">
      <div class="cart-block-item" v-for="(item, i) in localeCartStore" :key="i">
        <div class="cart-block-item__left">
          <div class="cart-block-item__left-image">
            <img :src="item.image" :alt="item.title">
          </div>
          <div class="cart-block-item__left-info">
            <h4 class="cart-block-item__left-title">{{ item.title }}</h4>
            <!-- <div class="cart-block-item__left-description">{{ item }}</div> -->
            <p class="cart-block-item__left-price">£{{ item.price }}</p>
          </div>
        </div>
        <div class="product-right-quantity">
          <div class="product-right-quantity__block">
            <div class="product-right-quantity__image" @click="item.count === 1 ? item.count : item.count--">
              <img src="/svg/minus.svg" alt="minus">
            </div>
            <div class="product-right-quantity__value">{{ item.count }}</div>
            <div class="product-right-quantity__image" @click="item.count === 3 ? item.count : item.count++">
              <img src="/svg/plus.svg" alt="plus">
            </div>
          </div>
      </div>
        <div class="cart-block-item__price">
          <span>£{{ item.price * item.count }}</span>
          <div class="delete-item">
            <img src="/svg/close.svg" alt="close" @click="cartStore.deletCartItem">
          </div>
        </div>
      </div>
    </div>
    <div class="cart-block-footer">
      <div class="cart-block-footer__content">
        <div class="cart-block-footer__total">
          <p class="cart-block-footer__total-text">Subtotal</p>
          <!-- <span class="cart-block-footer__total-price" v-if="totalPrice2 > 0">£{{ totalPrice2 * cartStore.cart.length }}</span> -->
          <span class="cart-block-footer__total-price">£{{ totalPrice(localeCartStore) }}</span>
        </div>
        <ui-button :color="'#ffffff'">Go to checkout</ui-button>
      </div>
    </div>
  </div>
</div>
<div class="cart-empty" v-else>
      You cart empty. Go to shop!
    </div>
</template>

<script setup>
import UiButton from '@/components/UI/UiButton.vue';
import { ref, onMounted, watch } from 'vue';
import { useCartStore } from '@/store/cart.js'

const cartStore = useCartStore()
const arr = cartStore.cart
const localeCartStore = JSON.parse(localStorage.getItem('cartStorage'))
const arrLength = ref(arr.length)
const totalPrice = (arr) => {
  let sum = 0
      if(arr.length > 1){
        for(let i = 0; i < arr.length; i++) {
          sum += arr[i].price * arr[i].count
        }
        return sum.toFixed(2)
      } else if (arr.length = 1) {
        let total = (arr[0].price * arr[0].count)
        return total.toFixed(2)
      }
    }

</script>

<style lang="scss" scoped>
.cart {
  background: #F9F9F9;
  padding: 64px 188px;
  @media screen and (max-width: 390px) {
      padding: 36px 24px;
  }
  &-title {
    font-family: var(--clash);
    font-weight: 400;
    font-size: 36px;
    line-height: 140%;
    color: var(--darkPrimary);
    margin: 0 0 48px;
    @media screen and (max-width: 390px) {
      font-size: 24px;
      margin: 0 0 40px;
  }
  }
  &-block {
    &-header {
      display: grid;
      grid-template-columns: 70% 15% 15%;
      border-bottom: 1px solid #EBE8F4;
      @media screen and (max-width: 390px) {
      display: none;
  }
    }
    &-items {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #EBE8F4;
    }
    &-item {
      display: grid;
      grid-template-columns: 70% 15% 15%;
      margin: 20px 0;
      align-items: center;
      @media screen and (max-width: 390px) {
      display: flex;
      flex-direction: column;
  }
      &__left {
        display: flex;
        align-items: center;
        &-image {
          margin-right: 21px;
          & img{
            max-width: 110px;
          }
        }
        &-info {
          max-width: 180px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        &-title {
            font-family: var(--clash);
            font-weight: 400;
            font-size: 20px;
            line-height: 140%;
            margin: 0 0 8px;
          }
        &-description {
          font-size: 14px;
          line-height: 150%;
          margin: 0 0 8px;
        }
        &-price {
          margin: 0;
          @media screen and (max-width: 390px) {
            display: none;
          }
        }
      }
      &__price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 390px) {

  }
      }
    }
    &-footer {
      margin: 28px 0 0;
      display: grid;
      &__content {
        justify-self: flex-end;
        @media screen and (max-width: 390px) {
      justify-self: center;
  }
      }
      &__total {
        display: flex;
        align-items: center;
        margin: 0 0 15px;
        &-text {
          font-family: var(--clash);
          font-size: 20px;
          line-height: 140%;
          color: #4E4D93;
          margin: 0 16px 0 0;
        }
      }
    }
  }
  &-empty {
    margin: 100px 0 0;
    font-size: 48px;
    text-align: center;
    height: 100vh;
    @media screen and (max-width: 390px) {
      font-size: 24px;
      margin: 30px 0 0;
  }
  }
}
.product-right {
  &-quantity{
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media screen and (max-width: 390px) {
        flex-direction: column;
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
        margin: 20px 0;
  }
      }
      &__image {
        width: 10px;
        cursor: pointer;
      }
     }
}
</style>