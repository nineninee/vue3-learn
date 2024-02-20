<template>
  <Person a="haha" :list="personList"/>
</template>

<script lang="ts" setup>
import  Person  from './components/Person.vue'
import {type PersonInter, type Persons} from './type/index'
import { reactive } from 'vue'

// interface PersonInter {
//   id: string,
//   name: string,
//   age: number,
// }

// type Persons = Array<PersonInter>

let personList:Persons = [
  {id: 'as11', name: '张三', age: 18},
  {id: 'as12', name: '李四', age: 19},
  {id: 'as13', name: '王五', age: 20}
]

let personList2 = reactive<Persons>([
  {id: 'as11', name: '张三', age: 18},
  {id: 'as12', name: '李四', age: 19},
  {id: 'as13', name: '王五', age: 20}
]) 

</script>

<style>
</style>