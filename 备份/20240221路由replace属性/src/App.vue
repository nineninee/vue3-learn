<template>
  <div class="app">
    <h2>路由replace属性</h2>
    <h2>控制路由跳转时操作浏览器历史记录的模式</h2>
    <!-- 浏览器的历史记录有两种写入方式 -->
    <!-- 1. push -->
    <!-- 追加历史记录，默认值 -->
    <!-- 2. replace -->
    <!-- 替换当前记录 -->
    <div class="navigate">
      <RouterLink replace to="/home" active-class="active">首頁</RouterLink>

      <!-- <RouterLink  to="/news"   active-class="active">新聞</RouterLink> -->
      <RouterLink replace :to="{name: 'xinwen'}"   active-class="active">新聞</RouterLink>

      <!-- <RouterLink  to="/about"  active-class="active">關於</RouterLink> -->
      <RouterLink  :to="{path: '/about'}"  active-class="active">關於</RouterLink>
    </div>
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterView, RouterLink } from 'vue-router';
</script>
<style>
.navigate {
  margin: 20px;
  height: 50px;
  background: pink;
  display: flex;
  justify-content: space-around;
  a {
    line-height: 50px;
    text-decoration: none;
    color: blueviolet;
  }
  a.active {
    color: yellow;
  }
}

.main-content {
  margin: 20px;
  height: 200px;
  background: pink;
}
</style>
