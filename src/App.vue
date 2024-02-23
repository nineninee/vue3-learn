<template>
  <div class="app">
    <Category title="person">
      <ul>
        <li v-for="item in personList">{{ item.name }}</li>
      </ul>
    </Category>
    <Category title="animal">
      <ul>
        <li v-for="item in animalList">{{ item.name }}</li>
      </ul>
    </Category>
  </div>
</template>

<script lang="ts" setup>
import Category from './components/Category.vue';
import { provide, ref } from 'vue';

const personList = ref([{id: '001',name:'张三'},{id:'002',name:'李四'},{id:'003',name:'王五'}]);
const animalList = ref([{id: '001',name:'ji'},{id:'002',name:'ya'},{id:'003',name:'gou'}]);



</script>
<style>
.app{
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  background-color: lightblue;
}
</style>
