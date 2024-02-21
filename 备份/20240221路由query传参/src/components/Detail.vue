<template>
  <div>
    <p>id: {{ query.id }}</p>
    <p>title:  {{ query.title }}</p>
    <p>content:  {{ query.content }}</p>
  </div>
</template>
<script setup lang='ts'>
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
let route = useRoute()

// let {query} = route  // 这里解构出来会失去响应式

let {query} = toRefs(route)  // 这里解构出来会失去响应式



</script>

<style scoped lang='scss'>

</style>