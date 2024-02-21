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
        // // 第一种写法：直接将params参数作为props传给组件
        // {
        //   name: "xiangqing",
        //   path: "detail/:id/:title/:content?",
        //   component: Detail,
        //   props: true, //开启props传参
        // },

        // 第二种写法：函数式写法，可以自己定义传给组件什么，可以用来传query参数
        {
          name: "xiangqing",
          path: "detail",
          component: Detail,
          props(route){
            return route.query
          }
        },

        // 第三种写法：对象式写法，可以自己定义传给组件什么
        // {
        //   name: "xiangqing",
        //   path: "detail",
        //   component: Detail,
        //   props: { id: "dddasdfa5", title: "news5", content: "news5 content" },
        // },
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
