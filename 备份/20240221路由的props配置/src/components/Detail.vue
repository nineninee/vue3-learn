<template>
  <div>
    <p>id: {{ id }}</p>
    <p>title:  {{ title }}</p>
    <p>content:  {{ content }}</p>
  </div>
</template>
<script setup lang='ts'>
defineProps(['id', 'title', 'content'])

</script>

<style scoped lang='scss'>

</style>