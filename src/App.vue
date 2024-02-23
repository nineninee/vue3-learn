<template>
  <div class="app">
    <Category>
      <!-- 获取slot传过来的所有参数 -->
      <!-- <template v-slot:content="data"> -->

      <!-- 解构slot传过来的参数 -->
      <template v-slot:content="{ content: personList }">
        <!-- <template v-slot:content="data"> -->
        <ul>
          <!-- 获取slot传过来的所有参数 -->
          <!-- <li v-for="item in data.content">{{ item.name }}</li> -->

          <!-- 解构slot传过来的参数 -->
          <li v-for="item in personList">{{ item.name }}</li>

        </ul>
      </template>
      <template v-slot:title>
        <h2>Person</h2>
      </template>
    </Category>

    <Category>
      <template #content="{ content: personList }">
      <!-- <template v-slot:content="{ content: personList }"> -->
        <h3 v-for="item in personList">{{ item.name }}</h3>
      </template>
      <template v-slot:title>
        <h2>Person</h2>
      </template>
    </Category>

  </div>
</template>

<script lang="ts" setup>
import Category from "./components/Category.vue";

// 作用域插槽
// 父组件提供结构，子组件提供数据

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
