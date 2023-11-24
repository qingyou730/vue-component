import { createRouter, createWebHistory } from 'vue-router'
import Button from '../views/Button.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'button',
      component: Button
    },
    {
      path: '/icon',
      name: 'icon',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Icon.vue')
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TooltipView.vue')
    },
  ]
})

export default router

