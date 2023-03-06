<template>

    <input
    :style="{background: background, color: color, width: width}"
    type="email"
    required
    placeholder="your@email.com"
    class="ui-input">

</template>

<script setup>
const props = defineProps({
  background: {
    type: String,
    default: '#F9F9F9'
  },
  color: {
    type: String,
    default: 'var(--darkPrimary)',
  },
  width: {
    type: String,
    default: '354px'
  }
})
</script>

<style lang="scss" scoped>
  .ui-input {
    padding-left: 32px;
    height: 56px;
    border: none;
    @media screen and (max-width: 390px) {
      width: 224px;
  }
  }
</style>