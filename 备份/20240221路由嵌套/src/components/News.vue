<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList">
        <RouterLink to="/news/detail">{{ news.title }}</RouterLink>
      </li>
    </ul>
    <!-- 内容区 -->
    <div>
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";

const newsList = reactive([
  { id: "dddasdfa1", title: "news1", content: "news1 content" },
  { id: "dddasdfa2", title: "news2", content: "news2 content" },
  { id: "dddasdfa3", title: "news3", content: "news3 content" },
]);
</script>

<style scoped>
.news {
  display: flex;
  gap: 50px;
}
</style>
