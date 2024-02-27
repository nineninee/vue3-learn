<template>
  <button @click="isShow = true">打开</button>

  <!-- to表示将teleport中的内容塞到对应的元素里面，这里表示塞到body里面，to可以写标签名、类名、id等选择器 -->
  <teleport to="body">
    <div class="modal" v-show="isShow">
      <h3>我是模态框</h3>
      <button @click="isShow = false">关闭</button>
    </div>
  </teleport>
</template>
<script setup lang="ts">
import { ref } from "vue";

let isShow = ref(false);
</script>

<style>
.modal {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
</style>
