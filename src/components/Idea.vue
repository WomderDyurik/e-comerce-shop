<template>
  <div class="idea">
    <div class="idea-container">
      <MainMediumBlock
      :title="'It started with a small idea'"
      :text="'A global brand with local beginnings, our story begain in a small studio in South London in early 2014'"
      :link="'View collection'"
      :color-title="'#FFFFFF'"
      :color-text="'#FFFFFF'"
      :background="'var(--darkPrimary)'"
      :background-link="'rgba(249, 249, 249, 0.15)'"
      :color-link="'#FFFFFF'"
      :btnBackground="'rgba(249, 249, 249, 0.15)'"
      :btnColor="'#ffffff'"
      :typeButton="'link'"
      :linkPath="'/products'"/>
      <div class="idea-image">
        <img src="/image/idea.jpg" alt="idea">
      </div>
    </div>
  </div>
</template>

<script setup>
import MainMediumBlock from '@/components/MainMediumBlock.vue';
</script>

<style lang="scss" scoped>
.idea {
  padding: 0px 80px;
  margin: 100px 0 60px;
  @media screen and (max-width: 390px) {
    padding: 0;
    margin: 60px 0 0;
  }
  &-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    @media screen and (max-width: 390px) {
      display: flex;
      flex-direction: column;
  }
  }
  &-image{
    @media screen and (max-width: 390px) {
      margin: 24px 0 32px;
  }
    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>