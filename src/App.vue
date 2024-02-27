<template>
  <div class="app">
    <h1>我是父元素</h1>
    <Modal />
  </div>
</template>

<script lang="ts" setup>
import Modal from '@/components/Modal.vue'
</script>
<style>
.app{
  background-color: aqua;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  width: 200px;
  height: 200px;
  filter: saturate(25%);
  /* 父元素加了filter滤镜后，modal框的fixed定位变成相对于父元素app，而不是相对于视口 */
}
</style>
