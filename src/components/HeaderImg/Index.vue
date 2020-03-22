<template>
    <div class="header_img_container" v-bind:style="maxWidth">
        <div class="header_img">
<!--            <img :src="headerImg" alt="">-->
            <img src="../../assets/img/head.jpg" alt="">
        </div>
        <div class="header_img_circle">
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    headerImg:{
      type: String
    },
    maxContainerWidth:{
      type: String
    }
  },
  data(){
    return{
      maxWidth: {
        'max-width' : this.maxContainerWidth
    }
    }
  }
}
</script>

<style lang="scss">
    .header_img_container{
        max-width: 220px;
        position: relative;
    }
    .header_img_circle{
        position: absolute;
        height: 110%;
        width: 110%;
        top: -5%;
        left: -5%;
        border-left: red solid 1px;
        border-right: red solid 1px;
        border-radius: 50%;
        animation:roteX 2s infinite;
        ::before{
            content: "";
            display: block;
            position: absolute;
            border-top: green solid 1px;
            width: 110%;
            height: 110%;
            border-radius: 50%;
            top: -5%;
            left: -5%;
        }
        ::after{
            content: "";
            display: block;
            position: absolute;
            border-bottom: blue solid 1px;
            width: 110%;
            height: 110%;
            border-radius: 50%;
            top: -5%;
            left: -5%;
        }
        @keyframes roteX {
            0%{
                transform: rotate(0deg);
            }
            25%{
                transform: rotate(90deg);
            }
            50%{
                transform: rotate(180deg);
            }
            75%{
                transform: rotate(270deg);
            }
            100%{
                transform: rotate(360deg);
            }
        }
    }
.header_img{
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;

    img{
        display: block;
        width: 100%;
        height: 100%;
    }
}
</style>
