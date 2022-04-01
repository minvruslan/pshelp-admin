import { createRouter, createWebHistory } from 'vue-router'
import Login from '@views/Login.vue'
import Admin from '@views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
