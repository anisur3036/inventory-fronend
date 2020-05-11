import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signin from "../views/Signin.vue";
import store from '../store'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin
  },
  {
    path: "/about",
    name: "about",
    component: About,
    beforeEnter: (to, from, next) => {
      if (! store.getters['auth/authenticated']) {
        return next({
          name: 'signin'
        })
      }
      next()
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
