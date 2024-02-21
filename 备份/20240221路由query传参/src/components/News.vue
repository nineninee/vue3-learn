<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList">
        <!-- 第一中写法 -->
        <RouterLink
          :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`"
          >{{ news.title }}</RouterLink
        >

        <!-- 第二种写法 -->
        <!-- <RouterLink
          :to="{
            path: '/news/detail',
            query: {
              id: news.id,
              title: news.title,
              content: news.content,
            },
          }"
        >
          {{ news.title }}
        </RouterLink> -->

        <RouterLink
          :to="{
            name: 'xiangqing',
            query: {
              id: news.id,
              title: news.title,
              content: news.content,
            },
          }"
        >
          {{ news.title }}
        </RouterLink>
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
