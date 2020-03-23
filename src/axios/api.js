import {get} from './http.js'
let moment =  require('moment')
const Personal = {
  info(type){
    let t = get("/about")
    if(type === 'blog'){
      t.then(res => {
        if(res.age){
          res.age = moment().diff(moment(res.age),"years")
        }
      })
    }else if(type === 'admin'){
      t.then(res => {
        if(res.age){
          res.age = moment(res.age).format('YYYY-MM-DD')
        }
      })
    }
    return t

  },
  skill(){
    return get("/skill")
  },
  experience(){
    return get("/experiences")
  },
}
const Site = {
  friendLinks(){
    return get("/links")
  },
  banner(){
    return get("/banners")
  }
}
const Message = {
  abstracts(){
    return get("/abstracts")
  }
}

export default {
  Personal,
  Site,
  Message,

}
