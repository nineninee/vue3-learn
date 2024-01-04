<template>
  <div class="person">
    <h1>watch</h1>
    <h2>情况三：监视reactive定义的对象类型数据</h2>
    <h3>姓名：{{person.name}}</h3>
    <h3>年龄：{{person.age}}</h3>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeName">修改姓名</button>
    <button @click="changePerson">修改person</button>

  </div>
</template>


<script lang="ts" setup>
import { reactive, watch } from 'vue';

let person = reactive({
  name: '张三',
  age: 18
})

function changeAge(){
  person.age++
}

function changeName(){
  person.name += '~'
}

function changePerson(): void{
  person = {name:'李四',age:20}
  Object.assign(person,{name:'王五',age:30})
}

// 情况三：监视reactive定义的对象类型数据, 默认开启深度监听，不可关闭
watch(person, (newValue, oldValue) =>
  console.log('person变化了', newValue, oldValue)
)





</script>

<style scoped lang='scss'>

</style>