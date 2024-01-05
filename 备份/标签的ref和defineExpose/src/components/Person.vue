<template>
  <div class="person">
    <h1>标签上的ref</h1>
    <h2 ref="friday">星期五</h2>
    <h2>a的值是{{a}}</h2>
    <h2>b的值是{{b}}</h2>
    <h2>c的值是{{c}}</h2>
    <button @click="getEle">点我获取星期五标签</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let friday = ref()

let a = ref(1)
let b = ref(2)
let c = ref(3)

function getEle() {

  // 使用ref获得的标签不会和其他组件冲突，他只获取当前组件上的标签
  console.log(friday.value);

  // 使用下面这种方法获取的标签有可能是父组件上的元素，因为父组件的元素先渲染
  // console.log(document.getElementById('friday')) //null
}

defineExpose({a, b, c: c.value, getEle})

</script>

<style scoped lang="scss"></style>
