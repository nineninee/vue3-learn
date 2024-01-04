<template>
  <div class="person">
    <h1>watch</h1>
    <h2>情况一：监视ref定义的基本类型数据</h2>
    <h3>{{ sum }}</h3>
    <button @click="sumAdd">sum++</button>

  </div>
</template>


<script lang='ts' setup>
import { ref, watch } from 'vue';

let sum = ref(0)
function sumAdd() {
  sum.value++
}

// 监视：情况1：监视ref定义的基本类型数据
const stopWatchSum = watch(sum,
  (newValue, oldValue) => {
    console.log('sum的值变化了', newValue, oldValue);
    newValue > 10 ? stopWatchSum() : null
  }
)

</script>

<style scoped lang='scss'>

</style>