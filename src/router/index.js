import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Signin from '../views/Signin.vue';
import Invoice from '../views/invoices/Index.vue';
import Form from '../views/invoices/Form.vue';
import Show from '../views/invoices/Show.vue';
import store from '../store';

Vue.use(VueRouter);
const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      secure: true
    }
  },
  {
    path: '/invoices',
    name: 'invoice',
    component: Invoice,
    meta: {
      secure: true
    }
  },
  {
    path: '/invoices/create',
    name: 'create',
    component: Form,
    meta: {
      secure: true
    }
  },
  {
    path: '/invoices/:id/edit',
    name: 'edit',
    component: Form,
    meta: {
      secure: true,
      mode: 'edit'
    }
  },
  {
    path: '/invoices/:id',
    name: 'show',
    component: Show,
    meta: {
      secure: true
    }
  },
  {
    path: '/',
    name: 'signin',
    component: Signin,
    meta: {
      guest: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      secure: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.secure)) {
    if (!store.getters['auth/authenticated']) {
      console.log('no token');
      next({
        name: 'signin'
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (!store.getters['auth/authenticated']) {
      next();
    } else {
      console.log('no token');
      next({
        name: 'about'
      });
    }
  } else {
    next();
  }
});

export default router;
