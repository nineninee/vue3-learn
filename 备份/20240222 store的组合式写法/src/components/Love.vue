<template>
  <div>
    <button @click="addLove">add❤</button>
    <div v-for="(item, index) in loves" :key="index">{{ item }}</div>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import {useLoveStore} from '@/store/love'
import {storeToRefs} from 'pinia'

const loveStore = useLoveStore()

// const { loves } = storeToRefs(loveStore)
const { loves } = loveStore

loveStore.$subscribe((mutation, state) => {
  // 监听store变化，mutation是变化前的数据，state是变化后的数据
  localStorage.setItem('loves', JSON.stringify(loves))
})

function addLove() {
  loves.push('❤')
  // loves.value.push('❤')
}
</script>

<style scoped lang='scss'>

</style>