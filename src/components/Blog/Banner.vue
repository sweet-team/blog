<template>
    <div class="banner_container_base">
        <el-carousel height="580px" :interval="6000"  class="banner_container">
            <el-carousel-item v-for="(item,i) in banners" :key="i" class="banner_item">
                <div class="banner_img_container">
                    <img :src="item.img" alt="">
                </div>
                <router-link :to="item.url">{{item.name}}</router-link>
                <h4>{{item.date}}</h4>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
  mounted() {
    this.init()
  },
  data(){
    return {
      banners:[]
    }
  },
  methods:{
    init(){
      this.$api.Site.banner().then(res =>{
        this.banners = res
      })
    }
  }
}
</script>

<style lang="scss">
    @import "../../assets/css/index.scss";
    .banner_container_base{
        max-width: 670px;
        margin-bottom: 20px;
        margin-left: 15px;
    }
    .banner_container{
        position: relative;
        height: 100%;
        display: block;
        overflow: hidden;
    }
    .banner_img_container{
        overflow: hidden;
        height: 100%;
    }
    .el-carousel__container:hover{
        .banner_img_container:before{
            box-sizing: border-box;
            box-shadow: rgba(0,0,0,0.2) 0px 0px 600px 5px inset;
            transition: all 0.5s;
        }

    }
    .banner_img_container:before{
        transition: all 0.5s;
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        background-color: rgba(0,0,0,0.6);
    }
    .banner_item{

        img{
            height: 100%;
            width: 100%;
        }
        a{
            position: absolute;
            top: 50%;
            right: 10%;
            max-width: 80%;
            font-size: 30px;
            color: white;
            transform: translateY(-20%);
            line-height: 50px;
        }
        a:hover{
            border-bottom: solid 1px rgba(255,255,255,0.4);
        }
        h4{
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            color: rgba(0,0,0,.6);
            font-weight: 500;
            letter-spacing: 1px;
        }

    }

</style>
