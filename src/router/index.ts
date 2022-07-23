import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CSSPractice from '../components/CSSPractice.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/test',
      component: CSSPractice,
    },
  ],
});

export default router;
