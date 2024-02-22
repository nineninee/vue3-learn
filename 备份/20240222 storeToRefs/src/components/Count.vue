<template>
  <div>
    <h1>{{ sum }} {{ student }} {{ id }}</h1>
    <button @click="add">加</button>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCountStore } from '@/store/count'
const countStore = useCountStore()

const { sum, student, id } = storeToRefs(countStore)

function add() {
  // 第一种修改方式
  // countStore.sum++

  // 第二种修改方式
  countStore.$patch({
    sum: countStore.sum++,
    student: '张三',
    id: '89fqw0'
  })

  // 第三种修改方式 action
  // countStore.increatments()
}

</script>

<style scoped lang='scss'>

</style>