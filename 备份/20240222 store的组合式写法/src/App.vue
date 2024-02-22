<template>
  <div class="app">
    <h2>pinia</h2>
    <Count></Count>
    <hr>
    <Love></Love>
  </div>
</template>

<script lang="ts" setup>
import Count from '@/components/Count.vue'
import Love from '@/components/Love.vue'

localStorage.setItem('loves', JSON.stringify([]))

</script>
<style>
</style>
