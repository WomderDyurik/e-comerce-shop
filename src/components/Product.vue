<template>
      <div class="products-item">
        <router-link :to="`products/${id}`" replace class="products-item__image">
          <img :src="image" :alt="name">
        </router-link>
        <router-link :to="`products/${id}`" replace class="products-item__title" >{{ name }}</router-link>
        <span class="products-item__cost">£{{ cost }}</span>
      </div>
</template>

<script setup>
  import { useRoute,useRouter } from 'vue-router';
  const props = defineProps( {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    cost: {
      type: Number,
      required: true
    },
  })
  const router = useRouter();
</script>

<style lang="scss" scoped>
.products {
    &-item {
      display: flex;
      flex-direction: column;
      &__title{
        margin: 24px 0 8px;
        font-family: var(--clash);
        font-weight: 400;
        font-size: 20px;
        line-height: 140%;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        &:hover {
          text-decoration: underline;
        }
      }
      &__cost {
        font-size: 18px;
        line-height: 150%;
      }
      &__image {
        & img {
          max-width: 100%;
          height: 350px;
          object-fit: cover;
        @media screen and (max-width: 390px) {
          max-width: 163px;
          max-height: 200px;
  }
}
      }
    }
  }
</style>