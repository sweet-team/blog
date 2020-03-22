<template>
        <div class="abstract_item" >
            <div class="abstract_img" >
                <router-link :to="abstract.type.id+'/'+abstract.id" >
                    <div class="abstract_img_cover" ><i class="el-icon-more"></i></div>
                    <img  :src="abstract.img" alt="">
                </router-link>
            </div>
            <div class="abstract_info">
                <h5>
                    {{abstract.type.name}}
                </h5>
                <router-link :to="abstract.type.id+'/'+abstract.id">
                    {{abstract.title}}
                </router-link>
                <h5>{{abstract.date}}</h5>
                <p>{{abstract.abstract}}</p>
            </div>
        </div>
</template>
<script>
    export default {
      props:{
        abstract:{
          type:Object
        },
      },
      data(){
        return{
          imgHeight:{
            height: '0px'
          },
        }
      },
      methods:{

      }
    }
</script>
<style lang="scss">
    /*.abstract_item:nth-child(4n){
        max-width: 280px;
    }
    .abstract_item:nth-child(4n+1){
        max-width: 380px;

    }
    .abstract_item:nth-child(4n+2){
        max-width: 360px;
    }
    .abstract_item:nth-child(4n+3){
        max-width: 310px;
    }*/

    .abstract_item{
        max-width: 320px;
        box-sizing: border-box;
        margin: 0 15px 20px 15px;
        background-color: #fff;
        text-align: left;
        .abstract_info{
            padding: 0 40px;
            letter-spacing: 1px;
            a{
                font-size: 1.5rem;
                color: #151515;
            }
            p{
                color: #999;
            }
        }
        h5{
            font-size: 15px;
            font-weight: 500;
            color: #000;
            margin: 10px 0;
        }
        .abstract_img_cover{
            position: absolute;
            width: 100%;
            height: 100%;
            i{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            top: 0;
            left: 0;
            color: white;
            background-color: rgba(0,0,0,0.8);
            font-size: 40px;
            box-sizing: border-box;
            transition: all 0.3s;
            opacity: 0;
        }
        .abstract_img:hover{
            .abstract_img_cover{
                opacity: 1;
                transition: all 0.3s;
            }

        }
        .abstract_img{
            width: 100%;
            overflow: hidden;
            position: relative;
            img{
                width: 110%;
                transition: all 0.4s;
            }
        }
        img:hover{
            background-color: #fff;
        }
    }
</style>
