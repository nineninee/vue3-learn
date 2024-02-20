<template>
  <div class="person">
    <h2>生命周期</h2>
    {{ sum }}
    <button @click="sum++">点我加1</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";

let sum = ref(0)

// 创建,相当于setup语法
console.log("创建");

// 挂载前
onBeforeMount(()=>{
  console.log("挂载前");
})
// 挂载完毕
onMounted(()=>{
  console.log("挂载完成");
})

// 更新前
onBeforeUpdate(()=>{
  console.log("更新前");
})
// 更新完毕
onUpdated(()=>{
  console.log("更新完成");
})

// 卸载前
onBeforeUnmount(()=>{
  console.log("卸载前");
})
// 卸载完毕
onUnmounted(()=>{
  console.log("卸载完成");
})

// 子挂载在父挂载之前

</script>

<style scoped lang="scss"></style>
