import { createRouter, createWebHistory } from 'vue-router'
import Icon from '../views/Icon.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'icon',
      component: Icon
    },
    {
      path: '/button',
      name: 'button',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Button.vue')
    }
  ]
})

export default router


const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const app = express();
