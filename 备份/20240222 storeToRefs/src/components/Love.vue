<template>
  <div>
    <div v-for="(item, index) in loves" :key="index">{{ item }}</div>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';

const loves = ref(['❤', '❤']);

</script>

<style scoped lang='scss'>

</style>