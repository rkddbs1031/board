import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Layout = () => import("@/assets/layouts/Layout.vue");

const Home = () => import("@/components/home/Home.vue");
const About = () => import("@/views/About.vue");

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
          path: "/about",
          name: "About",
          component: About,
        },
      ],
    },
  ],
});

export default router;
