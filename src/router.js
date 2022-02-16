import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Index',
    component: () => import('./views/Index.vue'),
    children:[
      {
        path:'',
        redirect:'/home'
      },
      {
        path:'/home',
        name:'Home',
        component: () => import('./views/Home.vue')
      },
      {
        path:'/me',
        name:'Me',
        component: () => import('./views/Me.vue')
      },
      {
        path:'/order',
        name:'Order',
        component: () => import('./views/Order.vue')
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component: () => import('./views/Login.vue')
  },
  {
    path:'/address',
    name:'address',
    component:() => import('./views/Address.vue')
  },
  {
    path:'/city',
    name:'city',
    component:() => import('./views/City.vue')
  },
  {
    path:'/search',
    name:'search',
    component:()=> import('./views/Search.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.ele_login ? true : false
//   if(to.path == '/login'){
//     next();
//   }else{
//     // 是否在登录状态下
//     isLogin ? next() : next('/login')
//   }
// })
export default router
