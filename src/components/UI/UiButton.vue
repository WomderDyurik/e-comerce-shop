<template>
  <button v-if="type === 'button'" class="btn" :style="{background: background, color: color, width: width}">
    <slot/>
  </button>

  <router-link v-else :to="path"
    :style="{color: color, background: background}"
    class="link"><slot/></router-link>
</template>

<script setup>
const props = defineProps({
  type:{
    type: String,
    default: 'button',
  },
  link: {
    type: String,
    required: false,
  },
  path: {
    type: String,
    default: '/',
  },
  background: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    default: 'var(--darkPrimary)',
  },
  width: {
    type: String,
    required: false,
  }
})
</script>

<style lang="scss" scoped>
.btn {
      background: var(--darkPrimary);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 150%;
      font-size: 16px;
      transition: .3s ease;
      height: 56px;
      padding: 0 32px;
      cursor: pointer;
      border: none;
      &:hover {
        opacity: .7;
      }
      @media screen and (max-width: 390px) {
      width: 100%;
  }
    }
.link {
      justify-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 170px;
      height: 56px;
      line-height: 150%;
      transition: .3s ease;
      text-decoration: none;
      &:hover {
        opacity: .7;
      }
      @media screen and (max-width: 390px) {
      width: 100%;
  }
}
</style>