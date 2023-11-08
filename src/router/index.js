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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('./../views/vuex-demo.vue')
  },

  // 动态路径参数
  {
    path: '/user/:id', // 动态路径参数，以‘:’开头
    // 动态路径前后同一渲染组件时，将不会销毁重绘，生命周期钩子将不会触发，需自行监听，或使用beforeRouteUpdate导航守卫
    name: 'user',
    component: () => import('../views/user.vue')
  },

  // 通配符
  {
    path: '/user-*', // pathMatch参数访问匹配到的URL
    name: 'u',
    component: () => import('../views/404.vue'),
    meta: {requireAuth: true} // 元信息
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/404.vue'),
    // 独有路由守卫
    beforeEnter: (to, from, next) => {
      next()
    }
  }
]

const router = new VueRouter({
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next)=>{
  // to：将要访问的路由；from：即将离开的路由；next：调用该方法来 resolve 这个钩子
  next()
  // false
  // next('/')、next({path: '/', replace: true, name: ''})
  // next(error)
})

// 2.5.0+
router.beforeResolve((to, from, next)=>{
  // 在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后
  next()
})

// 全局后置钩子
router.afterEach((to, from) => {
  // 不会改变导航本身
  console.log(to, from)
})

export default router
