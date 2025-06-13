import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WebStack from '@/views/WebStack.vue'
import Projects from '@/views/Projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/webstack',
      name: 'webstack',
      component: WebStack,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue'),
    },
  ],
})

export default router
