import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Layout = () => import("@/assets/layouts/Layout.vue");

const Home = () => import("@/views/Home.vue");
const Mood = () => import("@/components/mood/Mood.vue");
const Myplay = () => import("@/components/myplay/Myplay.vue");

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          name: "Home",
          component: Home,
        },
        {
          path: "/mood",
          name: "Mood",
          component: Mood,
        },
        {
          path: "/myplay",
          name: "Myplay",
          component: Myplay,
        },
      ],
    },
  ],
});

export default router;
