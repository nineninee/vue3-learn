<template>
  <div class="person">
    <h1>watch</h1>
    <h2>情况三：监视reactive定义的对象类型数据</h2>
    <h3>姓名：{{person.name}}</h3>
    <h3>年龄：{{person.age}}</h3>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeName">修改姓名</button>
    <button @click="changeC1">changeC1</button>
    <button @click="changeC2">changeC2</button>
    <button @click="changeCar">changeCar</button>
  </div>
</template>


<script lang="ts" setup>
import { reactive, watch } from 'vue';

let person = reactive({
  name: '张三',
  age: 18,
  car: {
    c1: '奔驰',
    c2: '宝马'
  }
})

function changeName(){
  person.name += '~'
}

function changeAge(){
  person.age++
}

function changeC1(): void{
  person.car.c1 += '!'
}

function changeC2(): void{
  person.car.c2 += '!'
}

function changeCar(): void{
  person.car = {c1:'小米', c2:'未来'}
}

// 情况四：监视响应式对象中的某个属性，若该属性是基本类型，要写成函数式
// watch(() => person.name, (newValue, oldValue) =>
//   console.log('person变化了', newValue, oldValue)
// )


// changeCar并不会触发监听，因为这里相当于监听car，但是changeCar将car换成别的东西了，此后再执行changeC1和changeC2也不会触发监听了
// watch(person.car, (newValue, oldValue) =>
//   console.log('person.car变化了', newValue, oldValue)
// )


// 这里相当于监听了person.car的地址值，改变里面的内容changeC1 changeC2不会监听到，但是修改整体changeCar是可以监听到的，要实现监听里面的内容要加上deep: true
watch(()=>person.car, (newValue, oldValue) =>
  console.log('person.car变化了', newValue, oldValue)
, {deep: true})

</script>

<style scoped lang='scss'>

</style>