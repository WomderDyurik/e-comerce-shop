import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/Index.vue';
import ProductPage from '@/views/ProductPage.vue';
import CartPage from '@/views/CartPage.vue';
import AllProductsPage from '@/views/AllProductsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/products/:id',
      name: 'ProductPage',
      component: ProductPage,
    },
    {
      path: '/cart',
      name: 'CartPage',
      component: CartPage,
    },
    {
      path: '/allproducts',
      name: 'AllProductsPage',
      component: AllProductsPage,
    }
  ]
})

export default router;