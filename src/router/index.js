import { createRouter, createWebHistory } from "vue-router";
import MainView from '@/views/MainView.vue';
import AuthView from '@/views/AuthView.vue';
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'main' },
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
    {
      path: '/'
    }
  ],
});

export default router;
