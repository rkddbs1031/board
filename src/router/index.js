import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Layout = () => import("@/assets/layouts/Layout.vue");
const BlankLayout = () => import("@/assets/layouts/BlankLayout.vue");
const Home = () => import("@/views/Home.vue");
// const Mood = () => import("@/components/mood/Mood.vue");
// const Myplay = () => import("@/components/myplay/Myplay.vue");

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
          path: "/board",
          name: "Board",
          component: Home,
        },
      ],
    },
  ],
});

export default router;
