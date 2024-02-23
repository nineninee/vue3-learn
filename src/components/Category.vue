<template>
<div class="category">
  <slot name="title">默认标题</slot>
  <slot name="content">默认内容</slot>

</div>
</template>
<script setup lang='ts'>

defineProps(['title'])

</script>

<style scoped>
.category{
  width: 100px;
  height: 200px;
  background-color: pink;
}

</style>