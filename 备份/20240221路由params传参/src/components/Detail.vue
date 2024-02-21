<template>
  <div>
    <p>id: {{ params.id }}</p>
    <p>title:  {{ params.title }}</p>
    <p>content:  {{ params.content }}</p>
  </div>
</template>
<script setup lang='ts'>
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
let route = useRoute()

// let {query} = route  // 这里解构出来会失去响应式

let {params} = toRefs(route)  // 这里解构出来会失去响应式



</script>

<style scoped lang='scss'>

</style>