<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList">
        <button @click="getDetail(news)">查看详情</button>
        <RouterLink
          :to="{
            name: `xiangqing`,
            query: { id: news.id, title: news.title, content: news.content },
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
import { useRouter } from "vue-router";
const router = useRouter();

interface NewsInter{
  id: string,
  title: string,
  content: string
}

const newsList = reactive([
  { id: "dddasdfa1", title: "news1", content: "news1 content" },
  { id: "dddasdfa2", title: "news2", content: "news2 content" },
  { id: "dddasdfa3", title: "news3", content: "news3 content" },
]);


function getDetail(news: NewsInter) {
  // router.push({
  //   name: `xiangqing`,
  //   query: { id: news.id, title: news.title, content: news.content },
  // })

  router.replace({
    name: `xiangqing`,
    query: { id: news.id, title: news.title, content: news.content },
  })
}
</script>

<style scoped>
.news {
  display: flex;
  gap: 50px;
}
</style>
