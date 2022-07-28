import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes:Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'homePage',
    component: () => import('@/views/home.vue'),
    meta: {
      title: '主页'
    }
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router