<template>
  <div class="personal">
    <Header ref="header" />
    <div class="index_in_person" v-bind:style="styleObject">
      <HeaderImg v-bind:header-img="aboutMe.proUrl" v-bind:max-container-width="'240px'" />
      <div>
        <h1>{{this.aboutMe.name}}<span class="font_color">-全栈学习之路</span></h1>
        <p>{{this.aboutMe.motto }}</p>
      </div>
      <DownArrow v-bind:to="this.$store.state.toPersonalUrl[0].url" />
    </div>

    <div><button @click="test()">dsaads</button></div>

  </div>
</template>

<script>
import Header from '../components/Personal/Header.vue'
import HeaderImg from '../components/HeaderImg/Index.vue'
import DownArrow from '../components/Common/DownArrow.vue'
export default {
  components:{
    Header,
    HeaderImg,
    DownArrow,

  },
  mounted() {
    this.initInfo()
    window.addEventListener('scroll',this.handleScroll, true)
    window.addEventListener('resize',this.handlerResize)
    this.handlerResize()
  },
  data(){
    return{
      aboutMe: {},
      scroll: '',
      styleObject:{
        height: ''
      },
    }
  },
  methods:{
    initInfo(){
      this.$api.Personal.PersonalInfo().then(res => {
        // console.log(res)
        this.aboutMe = res
        // console.log(this.aboutMe)
      })
    },
    handlerResize(){
      // 设备/屏幕高度
      this.styleObject.height = document.documentElement.clientHeight || document.body.clientHeight ;
      this.styleObject.height = this.styleObject.height+'px';
      // console.log(this.styleObject.height)
    },
    handleScroll(){

      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      //滚动条滚动到对应的板块显示
      if(this.scroll < 50){
        this.$refs.header.changeAnimate(true);
      }else {
        this.$refs.header.changeAnimate(false);
      }
    },
  },
};
</script>
<style lang="scss">
  .index_in_person{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: url("../assets/img/intro-bg.jpg") no-repeat bottom center;
    h1{
      color: white;
      font-size: 70px;
      font-weight: 700;
      letter-spacing: -2px;
      margin: 20px 0 10px 0;
    }
    p{
      color: white;
      font-size: 20px;
      letter-spacing: 8px;
      margin-bottom: 50px;
    }
  }
.personal{
  height: 1900px;
}
</style>
