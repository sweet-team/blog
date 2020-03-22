import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import "./assets/css/init.scss"
import api from './axios/api'

import { VueMasonryPlugin } from 'vue-masonry'

import VueQuillEditor from 'vue-quill-editor'

// import { ImageDrop } from 'quill-image-drop-module'
// import ImageResize from 'quill-image-resize-module'
// import  Quill  from 'vue-quill-editor'

import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'


require('./mock.js')
require("vue-masonry")

Vue.config.productionTip = false
Vue.prototype.$api = api

Vue.use(VueMasonryPlugin)

// Vue.use(ImageResize)
Vue.use(VueQuillEditor)


Vue.use(animated)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
