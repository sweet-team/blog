import  axios from 'axios'
import QS from 'qs'
import { Toast } from 'vant'
import store from '@/store/index.js';
import  router from '../router/index'

axios.defaults.baseURL = 'http://localhost'
axios.defaults.timeout = 10000

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use(config =>{
  //设置请求token
  // const token = store.state.token
  // //在header中加入Authorization头
  // token && (config.headers.Authorization = token)

  return config
},error => {
  return Promise.error(error)
})

axios.interceptors.response.use(response => {
  if(response.status === 200){
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
},error => {
  if(error.response.status){
    switch (error.response.status) {
      case 401:
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        });
        break;

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
      case 403:
        Toast({
          message: '登录过期，请重新登录',
          duration: 1000,
          forbidClick: true
        });
        // 清除token
        localStorage.removeItem('token');
        store.commit('loginSuccess', null);
        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
        }, 1000);
        break;

        // 404请求不存在
      case 404:
        Toast({
          message: '网络请求不存在',
          duration: 1500,
          forbidClick: true
        });
        break;
        // 其他错误，直接抛出错误提示
      default:
        Toast({
          message: error.response.data.message,
          duration: 1500,
          forbidClick: true
        });
    }
    return Promise.reject(error.response);
  }
})

export function get(url,params) {
  return new Promise((resolve, reject) =>{
    axios.get(url,{
      params: params
    }).then(res => {
      // console.log(res)
      resolve(res.data.data);
    }).catch(err => {
      reject(err.data)
    })
  })
}

export function post(url, params) {
  return new Promise((resolve, reject) =>{
    axios.post(url, QS.stringify(params)).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

