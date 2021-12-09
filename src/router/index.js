import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Detail from '../views/Detail.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
