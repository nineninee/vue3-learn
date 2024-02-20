<template>
  <div class="person">
    <h2>hooks</h2>
    <p><button @click="add">点我加1</button></p>
    <p>{{ sum }}----放大十倍{{  bigSum}}</p>
    <hr>
    <p><button @click="addDog">点我加1只狗</button></p>
    <img v-for="(dog, i) in dogList" :src="dog" :key="i"/>

  </div>
</template>

<script setup>
import useSum from '../hooks/useSum'
import useDog from '../hooks/useDog'

const {sum, add, bigSum} = useSum()
const {dogList, addDog} = useDog()
</script>

<style scoped>
img{
  height: 100px;
  margin-right: 10px;
}
</style>
