<template>
  <div class="person">
    <h3>the brand is : {{ car.brand }}, the price is : {{ car.price }}</h3>
    <button @click="changeBrand">changeBrand</button>
    <button @click="changePrice">changePrice</button>
    <button @click="changeCar">changeCar</button>
  </div>

</template>


<script lang='ts' setup>
import { ref, reactive } from 'vue'
let car = reactive({brand: 'baoma', price: 100})

function changeCar() {
  // car = {brand: 'yadi', price: 200}
  // car = reactive({brand: 'yadi', price: 200})
  Object.assign(car, {brand: 'yadi', price: 200})

}
function changeBrand() {
  car.brand = 'benchi'
}
function changePrice() {
  car.price += 10
}
</script>

<style scoped lang='scss'>

</style>