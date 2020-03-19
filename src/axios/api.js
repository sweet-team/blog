import {get} from './http.js'

const Personal = {
  PersonalInfo(){
      return get("/about")
  }
}

export default {
  Personal,

}
