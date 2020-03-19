import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toBlogUrl: "/blog",
    toPersonalUrl:[
      {url:"#1",name:"基本资料"},
      {url:"#2",name:"专业技能"},
      {url:"#3",name:"工作经历"},
      {url:"#4",name:"自我评价"},
      {url:"#5",name:"联系方式"},
    ],
    aboutMe:{
      name:'李学',
      motto: "生活苦乐相伴,爱情在月下花海"
    }
  },
  getters:{
    toBlogUrl: state => state.toBlogUrl,
    toPersonalUrl: state => state.toPersonalUrl,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
