<template>
  <div class="app">
    <Category>
      <template v-slot:content>
        <ul>
          <li v-for="item in personList">{{ item.name }}</li>
        </ul>
      </template>
      <template v-slot:title>
        <h2>Person</h2>
      </template>
    </Category>

    <Category title="animal">
      <template #content>
        <ul>
          <li v-for="item in animalList">{{ item.name }}</li>
        </ul>
      </template>
      <template v-slot:title>
        <h2>Animal</h2>
      </template>
    </Category>
  </div>
</template>

<script lang="ts" setup>
import Category from "./components/Category.vue";
import { provide, ref } from "vue";

const personList = ref([
  { id: "001", name: "张三" },
  { id: "002", name: "李四" },
  { id: "003", name: "王五" },
]);
const animalList = ref([
  { id: "001", name: "ji" },
  { id: "002", name: "ya" },
  { id: "003", name: "gou" },
]);


// v-slot只能用在组件和template标签上
// v-slot:slotname 可以简写为  #slotname
</script>
<style>
.app {
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  background-color: lightblue;
}
h2 {
  text-align: center;
  background-color: yellow;
}
</style>
