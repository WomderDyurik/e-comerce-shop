<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top__left">
        <div class="header-top-search active-icons">
          <img src="/svg/search.svg" alt="search" @click="iSOpenSearch = !iSOpenSearch">
          <form @submit.prevent="">
            <input
          type="text"
          class="header-top-search-input"
          v-if="iSOpenSearch"
          v-model="searchProduct">
          </form>
        </div>
        <div class="header-top-mobile__menu" @click="isOpenMobileMenu = !isOpenMobileMenu">
          <img src="/svg/menu.svg" alt="menu">
        </div>
      </div>
      <router-link to="/" class="header-top-title">Avion</router-link>
      <div class="header-top-right">
        <router-link to="/cart" class="header-top-cart active-icons">
          <img src="/svg/cart.svg" alt="cart">
          <span class="header-top-cart__span" v-if="cartStore.cart.length || localCartStore.length">{{ localCartStore.length || cartStore.cart.length }}</span>
        </router-link>
        <router-link to="/" class="header-top-user active-icons">
          <img src="/svg/user.svg" alt="user">
        </router-link>
      </div>
    </div>
    <div class="header-menu__mobile" v-if="isOpenMobileMenu">
      <div class="header-menu__mobile-close" @click="isOpenMobileMenu = !isOpenMobileMenu">
        <img src="/svg/close.svg" alt="close">
      </div>
      <router-link
        :to="'/products'"
        class="header-menu__mobile-link"
        >
        Products
      </router-link>
      <router-link
        :to="'/about'"
        class="header-menu__mobile-link"
        >
        About
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCartStore } from '@/store/cart.js'
import api from '@/api';

const localCartStore = JSON.parse(localStorage.getItem('cartStorage'))
const cartStore = useCartStore()
const isOpenMobileMenu = ref(false);
const iSOpenSearch = ref(false)
const searchProduct = ref('')
const categories = ref('')



onMounted(async () => {
  categories.value = await api.getCategories();
})
</script>

<style lang="scss" scoped>
.header {
  height: 70px;
  position: relative;
  @media screen and (max-width: 390px) {
      height: 50px;
  }
  &-menu__mobile {
    @media screen and (max-width: 390px) {
      order: 4;
      position: fixed;
      display: flex;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100vh;
      padding: 10px;
      background: #ffffff;
      flex-direction: column;
      padding: 24px;
      animation-duration: 0.3s;
      animation-name: slidein;
    }
    &-close {
      align-self: flex-end;
      cursor: pointer;
      margin-bottom: 20px;
    }
    &-link {
      text-decoration: none;
      font-size: 30px;
      line-height: 22px;
      color: #726E8D;
      transition: .3s ease;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      &:hover {
        font-weight: 500;
        color: var(--darkPrimary);
      }
    }
  }
  &-top {
    display: flex;
    padding: 0px 30px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 70px;
    @media screen and (max-width: 390px) {
      display: grid;
      grid-template-columns: 70% 15% 15%;
      justify-content: normal;
      border-bottom: none;
      padding: 0 24px;
  }
  &-search {
    position: relative;
    &-input {
      position: absolute;
      top: -50%;
      left: 0;
      display: block;
      height: 40px;
      background: #f9f9f9;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin: 0 20px 0;
      padding: 0 20px 0;
    }
  }
    &__left {
      display: flex;
      align-items: center;
      @media screen and (max-width: 390px) {
      order: 3;
      justify-self: flex-end;
  }
    }
    &-mobile__menu {
      display: none;
      @media screen and (max-width: 390px) {
        display: block;
        margin-left: 20px;
        cursor: pointer;
  }
    }
    &-title {
      font-family: var(--clash);
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      color: var(--dark);
      cursor: pointer;
      transition: .3s ease;
      text-decoration: none;
      &:hover {
        opacity: .7;
      }
      @media screen and (max-width: 390px) {
        order: 1;
  }
    }
    &-right {
      display: flex;
      align-items: center;
      @media screen and (max-width: 390px) {
        order: 2;
  }
    }
    &-cart {
      margin-right: 16px;
      position: relative;
      @media screen and (max-width: 390px) {
        display: block;
  }
      &__span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: var(--darkPrimary);
        color: #ffffff;
        font-size: 10px;
      }
    }
    &-user {
      @media screen and (max-width: 390px) {
      display: none;
  }
    }
  }
  &-bottom {
    margin: 20px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 390px) {
    display: none;
  }
    &-links {
      display: flex;
      align-items: center;
    }
    &-link {
      margin-right: 40px;
      text-decoration: none;
      line-height: 22px;
      color: #726E8D;
      transition: .3s ease;
      &:hover {
        font-weight: 500;
        color: var(--darkPrimary);
      }
    }
  }
}

@keyframes slidein {
  from {
    left: -100%;
    opacity: 0;
    visibility: hidden;
  }
  to {
    left: 0;
    opacity: 1;
    visibility: visible;
  }
}
</style>