import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import "./assets/css/init.scss"
import api from './axios/api'

require('./mock.js')

Vue.config.productionTip = false
Vue.prototype.$api = api

Vue.use(animated)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
