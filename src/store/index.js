import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toBlogUrl: "/blog",
    toPersonalUrl:[
      {url:"#baseInfo",name:"基本资料"},
      {url:"#skill",name:"专业技能"},
      {url:"#experience",name:"工作经历"},
      {url:"#selfEvaluation",name:"自我评价"},
      {url:"#contact",name:"联系方式"},
    ],
    blogUrl: [
      {url:'/blog',name:"首页"},
      {url:"/blog/",name:'文章分类',children:[]},
      {url:'/',name:'简历首页'},

    ],
    aboutMe:{
      "name":"李学",
      "sex":"男",
      "age":"24",
      "place":"福州市闽侯县",
      "college":"闽江学院",
      "major":"计算机科学与技术",
      "direction":"网络信息安全",
      "motto":"生活苦乐相伴,爱情在月下花海",
      "proUrl":'/img/head.cc5300ee.jpg',
      "collegeType":"大学本科",
      "evaluation":"性格开朗活泼，好学爱问，谦虚不骄傲，有较强的学习能力。能够快速适应新的环境，在新环境中卓越成长。只有在不断的努力中才能有所成就。",
      "email":"lixue_main@163.com",
      "weChat":"lx249875314",
    }
  },
  getters:{
    toBlogUrl: state => state.toBlogUrl,
    toPersonalUrl: state => state.toPersonalUrl,
    blogUrl: state => state.blogUrl,
    aboutMe: state => state.aboutMe
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
