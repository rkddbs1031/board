import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Layout = () => import("@/assets/layouts/Layout.vue");
const BlankLayout = () => import("@/assets/layouts/BlankLayout.vue");

const Board = () => import("@/components/board/Board.vue");
const Login = () => import("@/components/auth/Login.vue");
const register = () => import("@/components/auth/Register.vue");

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/auth/login",
      component: BlankLayout,
      children: [
        {
          path: '/auth/login',
          component: Login,
        },
        {
          path: '/auth/register',
          component: register,
        },
      ],
    },
    {
      path: "/board",
      component: Layout,
      children: [
        {
          path: "/board/lists",
          name: "Board",
          component: Board,
        },
      ],
    },
  ],
});

export default router;
