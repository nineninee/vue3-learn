<template>
  <Person v-if="showPerson" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const showPerson = ref(true)
import Person from './components/Person.vue'
</script>

<style>
</style>