<template>
  <div>
    <h1>{{ countStore.sum }}</h1>
    <button @click="add">加</button>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import { useCountStore } from '@/store/count'
const countStore = useCountStore()

function add() {
  // 第一种修改方式
  // countStore.sum++

  // 第二种修改方式
  // countStore.$patch({
  //   sum: countStore.sum++,
  //   student: '张三'
  // })

  // 第三种修改方式 action
  countStore.increatments()
}

</script>

<style scoped lang='scss'>

</style>