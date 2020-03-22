<template>
  <div >
    <Header ref="header" />
    <div class="index_in_person" v-bind:style="styleObject">
      <HeaderImg v-bind:header-img="aboutMe.proUrl" v-bind:max-container-width="'240px'" />
      <div>
        <h1>{{this.aboutMe.name}}<span class="font_color">-全栈学习之路</span></h1>
        <p>{{this.aboutMe.motto }}</p>
      </div>
      <DownArrow v-bind:to="this.$store.state.toPersonalUrl[0].url" />
    </div>
    <div ref="baseInfoContainer" id="baseInfo">
      <Base ref="baseInfo" />
    </div>
    <div id="skill">
      <Skill v-bind:skills="skills"  />
    </div>
    <div id="experience" ref="experienceContainer">
      <Experience v-bind:experience="experiences"  ref="experience"/>
    </div>
    <div id="selfEvaluation">
      <SelfEvaluation v-bind:content="aboutMe.evaluation" />
    </div>
    <div id="contact">
      <Contact v-bind:contact="{place:aboutMe.place,email:aboutMe.email,weChat:aboutMe.weChat}"/>
    </div>
    <div>
      <Bottom />
    </div>
  </div>
</template>

<script>
import Header from '../components/Personal/Header.vue'
import HeaderImg from '../components/HeaderImg/Index.vue'
import DownArrow from '../components/Common/DownArrow.vue'
import Base from '../components/Personal/Base.vue'
import Skill from '../components/Personal/Skill.vue'
import Experience from '../components/Personal/Experience.vue'
import SelfEvaluation from '../components/Personal/SelfEvaluation.vue'
import Contact from '../components/Personal/Contact.vue'
import Bottom from '../components/Bottom/Index.vue'
export default {
  components:{
    Header,
    HeaderImg,
    DownArrow,
    Base,
    Skill,
    Experience,
    SelfEvaluation,
    Contact,
    Bottom,
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
      skills: [],
      selfEvaluation: '',
      experiences: [],

      skillHeight: '',
      styleObject:{
        height: ''
      },
    }
  },
  methods:{
    initInfo(){
      this.$api.Personal.info().then(res => {
        // console.log(res)
        this.aboutMe = res
        // console.log(this.aboutMe)
      })
      this.$api.Personal.skill().then(res => {
        console.log(res)
        this.skills = res
      })
      this.$api.Personal.experience().then(res => {
        this.experiences = res
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
      let height = document.documentElement.clientHeight || document.body.clientHeight ;
      let bottomPosition = this.scroll+ height
      //滚动条滚动到对应的板块显示
      if(this.scroll < 50){
        this.$refs.header.changeAnimate(true);
      }else {
        this.$refs.header.changeAnimate(false);
      }


      let baseInfoContainerH = this.$refs.baseInfoContainer.offsetHeight
      let baseInfoContainerOffsetTop= this.$refs.baseInfoContainer.offsetTop
      let baseInfoI = baseInfoContainerOffsetTop+baseInfoContainerH/2

      if (bottomPosition > baseInfoI && this.scroll < baseInfoI){
        this.$refs.baseInfo.addChangeAnimate(true)
      }else {
        this.$refs.baseInfo.addChangeAnimate(false)
      }

      let experienceH = this.$refs.experienceContainer.offsetHeight
      let experienceT  = this.$refs.experienceContainer.offsetTop
      let experienceI = experienceT+ experienceH/3

      if (bottomPosition > experienceI && this.scroll < experienceI){
        this.$refs.experience.changeAnimation(true)
      }else {
        this.$refs.experience.changeAnimation(false)
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
</style>
