import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/auth/login",
      component: () => import("@/assets/layouts/BlankLayout.vue"),
      children: [
        {
          path: '/auth/login',
          component: () => import("@/views/auth/Login.vue"),
        },
        {
          path: '/auth/register',
          component: () => import("@/views/auth/Register.vue"),
        },
      ],
    },
    {
      path: "/board",
      component: () => import("@/assets/layouts/Layout.vue"),
      children: [
        {
          path: "/board/list",
          name: "Board",
          component: () => import("@/views/board/Board.vue"),
        },
        {
          path: "/board/new",
          name: "BoardNew",
          component: () => import( '@/views/board/BoardNew' ),
        },
        {
          path: "/board/:id",
          name: "BoardDetail",
          component: () => import( '@/views/board/BoardDetail' ),
        },
        {
          path: "/board/:id/edit",
          name: "BoardEdit",
          component: () => import( '@/views/board/BoardModify' ),
        },
      ],
    },
  ],
});

export default router;
