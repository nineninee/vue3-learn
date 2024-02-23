<template>
<div class="category">
  <slot name="title">默认标题</slot>
  <slot name="content" :content="personList" x="haha" y="hehe">默认内容</slot>
</div>
</template>
<script setup lang='ts'>
import { provide, ref } from "vue";

defineProps(['title'])



const personList = ref([
  { id: "001", name: "张三" },
  { id: "002", name: "李四" },
  { id: "003", name: "王五" },
]);

</script>

<style scoped>
.category{
  width: 100px;
  height: 200px;
  background-color: pink;
}

</style>