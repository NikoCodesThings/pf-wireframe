import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/Login.vue")
  },
  {
    path: '/404',
    name: 'Error',
    component: () => import("@/views/Error.vue")
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import("@/views/Dashboard.vue")
  },
  {
    path: '/character',
    name: 'Character',
    component: () => import("@/views/Character.vue")
  },  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
