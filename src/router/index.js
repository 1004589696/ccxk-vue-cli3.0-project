import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 定义全局指令title，修改页面标题
Vue.directive("title", {
  inserted: function(el, binding) {
    document.title = el.dataset.title;
  },
});

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/front-back",
    component: () => import("../views/Front_back.vue"),
  },
  {
    path: "/import-sort",
    component: () => import("../views/Import_sort.vue"),
  },
  {
    path: "/css-select-none",
    component: () => import("../views/Css_select_none.vue"),
  },
  {
    path: "/css-ellipsis",
    component: () => import("../views/Css-ellipsis.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
