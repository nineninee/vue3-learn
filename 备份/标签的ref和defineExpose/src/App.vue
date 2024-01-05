<template>
  <button @click="getPerson">click me to get Person component</button>
  <button @click="changeA">click me to change Person's a</button>
  <button @click="changeC">click me to change Person's c</button>
  <button @click="getEle">click me to get Person's friday</button>

  <Person ref="person"/>
</template>

<script lang="ts" setup>
import  Person  from './components/Person.vue'
import { ref } from 'vue'

let person = ref()

function getPerson() {
  console.log(person.value)
}

function changeA(){
  person.value.a++
}

function changeC(){
  person.value.c++
}

function getEle(){
  person.value.getEle()
}


</script>

<style>
</style>