// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import { createRouter, createWebHistory } from "vue-router";
// 引入相关组件
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import News from "../components/News.vue";
import Detail from "../components/Detail.vue";

// 第二步：创建路由器
const router = createRouter({
  history: createWebHistory(), //路由器的工作模式
  routes: [
    {
      name: "zhuye",
      path: "/home",
      component: Home,
    },
    {
      name: "xinwen",
      path: "/news",
      component: News,
      children: [
        {
          name: "xiangqing",
          path: "detail",
          component: Detail,
        },
      ],
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
  ],
});

export default router;

// 暴露router
