import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'goods'}
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import(/* chunkName:goods */ '../views/goods/Index.vue')
  },
  {
    path: '/merchant',
    component: () => import(/* chunkName:goods */ '../views/commits/Index.vue')
  },
  {
    path: '/commits',
    component: () => import(/* chunkName:goods */ '../views/commits/Index.vue')
  }
]

const router = new vueRouter({
  routes
})
export default router