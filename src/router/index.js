import { createRouter, createWebHistory } from 'vue-router'
import Button from '../views/Button.vue'
import ComHome from '../pages/ComHome/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/comHome'
    },
    {
      path: '/comHome',
      name: 'comHome',
      component: ComHome,
      children: [
        {
          path: '',
          name: 'button',
          component: Button
        },
        {
          path: 'icon',
          name: 'icon',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Icon.vue')
        },
        {
          path: 'tooltip',
          name: 'tooltip',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/TooltipView.vue')
        },
        {
          path: 'dialog',
          name: 'dialog',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/DialogView.vue')
        },
      ]
    },
    {
      path: '/echarts',
      name: 'echarts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Echarts/Echarts.vue')
    }
  ]
})

export default router
