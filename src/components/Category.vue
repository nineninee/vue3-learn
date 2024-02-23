<template>
<div class="category">
  <div>{{ title }}</div>
  <slot></slot>
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