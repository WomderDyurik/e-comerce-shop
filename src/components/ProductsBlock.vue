<template>
  <div class="products">
    <div class="products-items">
      <Product v-for="product in products"
        :key="product.id"
        :id="product.id"
        :image="product.img"
        :name="product.title"
        :cost="product.price"
        />
    </div>
    <ui-button
    :type="'link'"
    :background="'#F9F9F9'"
    :color="'var(--darkPrimary)'"
    :path="'/allproducts'">View collection</ui-button>
  </div>
</template>

<script setup>
import UiButton from './UI/UiButton.vue';
import Product from '@/components/Product.vue';
import { ref } from 'vue';
const props = defineProps({
  products: {
    required: true,
  }
})
</script>

<style lang="scss" scoped>
  .products {
    padding: 0px 80px;
    display: grid;
    @media screen and (max-width: 390px) {
      padding: 0px;
  }
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