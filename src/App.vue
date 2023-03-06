<template>
  <div class="container">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';
</script>

<style lang="scss">

.container {
  width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 390px) {
    width: 99%;
  }
}
.active-icons {
  cursor: pointer;
  transition: .3s ease;
  &:hover {
    opacity: .7;
  }
}
</style>
