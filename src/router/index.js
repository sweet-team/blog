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
