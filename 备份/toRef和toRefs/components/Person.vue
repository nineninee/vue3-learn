<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <hr>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
  </div>

</template>


<script lang='ts' setup>
import { ref, reactive, toRefs, toRef } from 'vue'
let person = reactive({
  name: '张三',
  age: 18
})
// let {name, age} = person
let {name, age} = toRefs(person)
// let age = toRef(person, 'age')

function changeName() {
  // person.name = '李四'
  name.value = '王五'
}
function changeAge() {
  // person.age++
  age.value++
}
</script>

<style scoped lang='scss'>

</style>