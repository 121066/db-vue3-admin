import { createRouter, createWebHashHistory } from 'vue-router'
import { Home } from './router'
const rot = [{
  path:'/login',
  name:'login',
  component:()=>import('@/view/Login/index.vue')
},...Home]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: rot,
})
