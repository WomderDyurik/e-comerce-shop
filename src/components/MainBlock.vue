<template>
  <div class="main">
    <MainMediumBlock
    :title="'Luxury homeware for people who love timeless design quality'"
    :text="'Shop the new Spring 2022 collection today'"
    :link="'View collection'"
    :typeButton="'link'"
    :linkPath="'/allproducts'"
    />
    <div class="main-image">
      <img src="/image/main.jpg" alt="main">
    </div>
  </div>
</template>

<script setup>
  import MainMediumBlock from '@/components/MainMediumBlock.vue';
</script>

<style lang="scss" scoped>
.main {
  background: url('/image/main.jpg');
  padding: 130px 80px;
  display: grid;
  @media screen and (max-width: 390px) {
    padding: 0;
    background: none;
  }
  &-image {
    display: none;
    @media screen and (max-width: 390px) {
      display: block;
      & img {
        max-width: 100%;
      }
  }
  }
}
</style>