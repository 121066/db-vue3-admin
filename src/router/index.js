import { createRouter, createWebHashHistory } from 'vue-router'
import { Homes } from './router'
import { getCookies, remove } from '../util/tokenCookie'
import { useRoutesList } from '../stores/routesList' //引入store路由状态
import pinia from '../stores'
import { storeToRefs } from 'pinia'
const rot = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/Login/index.vue'),
  },
  ...Homes,
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: rot,
})

router.beforeEach(async (to, from, next) => {
  const token = getCookies()
  if (to.path === '/login' && !token) {
    next()
  } else {
    if (!token) {
      next(
        `/login?redirect=${to.path}&params=${JSON.stringify(
          to.query ? to.query : to.params
        )}`
      )
      remove()
    } else if (token && to.path === '/login') {
      next('/home')
    } else {
      let rots=Homes[0].children
      const storesRoutesList=useRoutesList(pinia)
      const {routesList,meta}=storeToRefs(storesRoutesList)
     if(routesList.value.length===0){
      storesRoutesList.setRoutesList(rots)
     
      console.log(routesList.value,'路由拦截')
     }
      next()
    }
  }
})
