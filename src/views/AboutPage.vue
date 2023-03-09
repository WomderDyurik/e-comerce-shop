<template>
  <AboutBrand />
  <Loader v-if="loading"/>
  <ProductsBlock v-else :products="popularProducts"/>
  <Idea/>
  <Email/>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import api from '@/api';
import Loader from '@/components/UI/Loader.vue';
import AboutBrand from '@/components/AboutBrand.vue';
import ProductsBlock from '@/components/ProductsBlock.vue';
import Idea from '@/components/Idea.vue';
import Email from '@/components/Email.vue';


const popularProducts = ref([])
const loading = ref(true)

onMounted(async () => {
  popularProducts.value = await api.getPopularProducts();
  loading.value = false;
})
</script>

<style lang="scss">

</style>