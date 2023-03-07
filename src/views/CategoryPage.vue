<template>
  <div class="all-products-page">
    <div class="all-products-page-links">
      <ui-button
        v-for="(link, i) in categories" :key="i"
        class="all-products-page-link"
        :background="'#ffffff'"
        :color="'var(--darkPrimary)'"
        @click="currentCategory = link"
        >
        {{ link }}
      </ui-button>
    </div>
    <div class="all-products-page-top">
      <h3 class="all-products-page-top__title">{{ titleForAll || currentCategory || title }}</h3>
      <div class="all-products-page-top__options options">
        <div class="options-item">
          <p class="options-title">Sorted by</p>
          <select name="price" id="price">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </div>
        <ui-button
          :background="'#F9F9F9'"
          :color="'var(--darkPrimary)'"
          :path="'/products'"
          @click="seeAll++">All products</ui-button>
        </div>
    </div>
    <div class="all-products-page-main">
      <ProductsBlock  :products="allProducts"/>
  </div>
  </div>
  </template>

  <script setup>
  import ProductsBlock from '@/components/ProductsBlock.vue';
  import Loader from '@/components/UI/Loader.vue';
  import UiButton from '@/components/UI/UiButton.vue';
  import api from '@/api'
  import { onMounted,ref,watch } from 'vue'

  const allProducts = ref([])
  const loading = ref(true)
  const categories = ref('')
  const currentCategory = ref('')
  const title = 'All products'
  const seeAll = ref(1)
  const titleForAll = ref('')

  onMounted(async () => {
      allProducts.value = await api.getAllProducts();
      categories.value = await api.getCategories();
      loading.value = false;
  })
  watch(currentCategory,async (newVal,oldVal) => {
    allProducts.value = await api.getAllProductsOfCategories(newVal);
  })
  watch(seeAll,async (newVal,oldVal) => {
    allProducts.value = await api.getAllProducts();
    titleForAll.value = 'All products'
  })


  </script>

  <style lang="scss" scoped>
  .all-products-page {
    padding: 0 80px;
    display: grid;
    &-links {
      display: flex;
      justify-content: center;
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
    &-top {
      display: flex;
      flex-direction: column;
      &__title {
        text-align: center;
        margin: 80px 0 24px;
        font-family: var(--clash);
        font-weight: 400;
        font-size: 36px;
        line-height: 140%;
      }
    }
  }
  .options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-title {
      margin-right: 10px;
    }
    &-item {
      display: flex;
      align-items: center;
    }
  }
  .products {
      display: grid;
      &-items {
        display: grid;
        grid-template-columns: repeat(4, minmax(200px, auto));
        gap: 30px;
        margin-bottom: 48px;
        @media screen and (max-width: 390px) {
          grid-template-columns: repeat(2, minmax(100px, auto));
          justify-content: none;
    }
      }
    }
  </style>