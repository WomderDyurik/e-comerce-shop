<template>
<div class="all-products-page">
  <div class="all-products-page-top">
    <h3 class="all-products-page-top__title">View all products</h3>
    <div class="all-products-page-top__options options">
      <div class="options-item">
        <p class="options-title">Sorted by</p>
        <select name="price" id="price">
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
      </div>
    </div>
  </div>
  <div class="all-products-page-main">
    <div class="products">
    <Loader v-if="loading"/>
    <div class="products-items">
      <Product v-for="product in popularProducts"
        :key="product.id"
        :id="product.id"
        :image="product.img"
        :name="product.title"
        :cost="product.price"
        />
    </div>
  </div>
</div>
</div>
</template>

<script setup>
import Product from '@/components/Product.vue';
import Loader from '@/components/UI/Loader.vue';
import api from '@/api'
import { onMounted,ref } from 'vue'

const popularProducts = ref([])
const loading = ref(true)

onMounted(async () => {
    popularProducts.value = await api.getPopularProducts();
    loading.value = false;
})
</script>

<style lang="scss" scoped>
.all-products-page {
  padding: 0 80px;
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
      column-gap: 30px;
      margin-bottom: 48px;
      @media screen and (max-width: 390px) {
        grid-template-columns: repeat(2, minmax(100px, auto));
        justify-content: none;
  }
    }
  }
</style>