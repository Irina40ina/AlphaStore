import { createRouter, createWebHistory } from "vue-router";
import MainView from '@/views/MainView.vue';
import AuthView from '@/views/AuthView.vue';
import NotFound from '@/views/NotFound.vue';
import loginFormComp from "@/components/auth/loginFormComp.vue";
import logupFormComp from "@/components/auth/logupFormComp.vue";

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
      path: '/main/:selectedApt',
      name: 'selectedApt',
      component: MainView,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      meta: { requiredAuth: false },
      redirect: { name: "login" },
      children: [
        {
          path: "log-in",
          component: loginFormComp,
          name: "login",
          meta: { requiredAuth: false },
        },
        {
          path: "log-up",
          component: logupFormComp,
          name: "logup",
          meta: { requiredAuth: false },
        },
      ],
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
