import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "order-book-page" */ '../views/OrderBookPage.vue'),
  },
  {
    path: '/diff-viewer/',
    name: 'About',
    component: () => import(/* webpackChunkName: "diff-viewer-page" */ '../views/DiffViewerPage.vue'),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
