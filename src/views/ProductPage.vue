<template>
<Loader v-if="loading"/>
<ProductPageItem v-else :product="currentProduct"/>
<AboutBrand />
<Idea/>
<Email/>
</template>

<script setup>
import Loader from '@/components/UI/Loader.vue';
import ProductPageItem from '@/components/ProductPageItem.vue';
import AboutBrand from '@/components/AboutBrand.vue';
import Idea from '@/components/Idea.vue';
import Email from '@/components/Email.vue';

import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import api from '@/api.js'

const route = useRoute();
const router = useRouter();
const productId = ref("")
const currentProduct = ref({})
const popularProducts = ref([])
const loading = ref(true)

onMounted(async () => {
  productId.value = route.params.id
  currentProduct.value = await api.getProduct(productId.value)
  popularProducts.value = await api.getPopularProducts();
  loading.value = false;
})
</script>

<style lang="scss" scoped>

</style>