<template>
  <div class="app">
    <h2>路由的props配置</h2>
    <div class="navigate">
      <RouterLink  to="/home" active-class="active">首頁</RouterLink>

      <!-- <RouterLink  to="/news"   active-class="active">新聞</RouterLink> -->
      <RouterLink  :to="{name: 'xinwen'}"   active-class="active">新聞</RouterLink>

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
