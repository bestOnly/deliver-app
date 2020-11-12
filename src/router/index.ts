import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'dashboard'}
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/dashboard/goods',
    component: () => import(/* chunkName:goods */ '../views/dashboard/Index.vue'),
    children: [
      {
        path: '/dashboard/goods',
        name: 'goods',
        component: () => import(/* webpackChunkName:goods */ '../views/goods/Index.vue')
      },
      {
        path: '/dashboard/merchant',
        name: 'merchant',
        component: () => import(/* webpackChunkName:goods */ '../views/merchant/Index.vue')
      },
      {
        path: '/dashboard/commits',
        name: 'commits',
        component: () => import(/* webpackChunkName:goods */ '../views/commits/Index.vue')
      }
    ]
  }
]

const router = new vueRouter({
  routes
})
export default router