<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg">
  </div>
</template>

<script lang="ts" setup>
import { customRef } from 'vue'

let initValue = 'hello'
let timer = null
let msg = customRef((track, trigger) => {
  return {
    get() {
      track()  // 告诉vue数据msg很重要，你要对msg进行持续关注，一旦msg变化就去更新
      return initValue
    },
    set(newValue) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        initValue = newValue
        trigger() // 告诉vue一下msg变化了
      }, 1000)
    }
  }
})

</script>
<style>
</style>
