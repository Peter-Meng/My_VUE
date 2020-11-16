import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home");
const About = () => import("../views/About");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  routes
});

export default router;
