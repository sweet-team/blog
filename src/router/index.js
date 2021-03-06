import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Personal.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Blog.vue')
  },{
    path:"/test",
    component: ()=> import('../views/Test')
  },
  {
    path: '/admin',
    component: ()=> import('../views/Admin/Index'),
    redirect: '/admin/index',
    children:[
      { path: '/admin/index',
        meta: { title: '首页' },
        component: () => import('../views/Admin/Views/BaseForm')
      },
      { path: '/admin/dashboard',
        meta: { title: '系统首页' },
        component: () => import('../views/Admin/Views/Dashboard')
      },{ path: '/admin/about',
        meta: { title: '我的信息' },
        component: () => import('../views/Admin/Views/AboutMe')
      },{ path: '/admin/skill',
        meta: { title: '我的技能' },
        component: () => import('../views/Admin/Views/Skill')
      },{ path: '/admin/experience',
        meta: { title: '工作经历' },
        component: () => import('../views/Admin/Views/Experience')
      },


    ]

  }
]
const scrollBehavior = function(to, from, savedPosition) {
  if (savedPosition) {
     // savedPosition is only available for popstate navigations.
     return savedPosition
   } else {
     const position = {}
     // new navigation.
     // scroll to anchor by returning the selector
     if (to.hash) {
         position.selector = to.hash
       }
     // check if any matched route config has meta that requires scrolling to top
     if (to.matched.some(m => m.meta.scrollToTop)) {
         // cords will be used if no selector is provided,
         // or if the selector didn't match any element.
         position.x = 0
         position.y = 0
       }
     // if the returned position is falsy or an empty object,
     // will retain current scroll position.
     return position
   }
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
})

export default router
