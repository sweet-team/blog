import {get} from './http.js'

const Personal = {
  info(){
      return get("/about")
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
