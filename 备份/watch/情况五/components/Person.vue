<template>
  <div class="person">
    <h1>watchEffect</h1>
    <h2>temp: {{ temp }}</h2>
    <h2>height: {{ height }}</h2>
    <button @click="changeTemp">temp++</button>
    <button @click="chagneHeight">height++</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, watchEffect } from "vue";

let temp = ref(10);
let height = ref(10);

function changeTemp() {
  temp.value += 10;
}

function chagneHeight() {
  height.value += 10;
}

// watch([temp, height], (value) => {
//   if (temp.value > 40 || height.value > 50) {
//     console.log("触发watchEffect");
//   }
// });


// bug: 先改变temp， 再改变height， 此时watchEffect不会触发
watchEffect(()=>{
  if(temp.value > 40 || height.value > 50){
    console.log('触发watchEffect');
  }else{
    console.log('没有触发watchEffect');
  }
})
</script>

<style scoped lang="scss"></style>
