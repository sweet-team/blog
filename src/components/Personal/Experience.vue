<template>
    <div class="base_personal_container base_experience_container">
        <h2><strong>工作</strong> 经历</h2>
        <hr>

            <div class="experience_container">
                <div class="experience_item animated" v-bind:class="{bounceInUp: isActive, bounceOutUp: !isActive}" v-for="(item,i ) in experience" :key="i">
                    <h4><i class="el-icon-s-cooperation" /><strong>工作职位:</strong>{{item.post}}</h4>
                    <h4><i class="el-icon-s-home"/><strong>工作地点:</strong>{{item.place}}</h4>
                    <h4><i class="el-icon-time"/><strong>起止时间:</strong>{{item.startTime}}<i class="el-icon-right"/>{{item.endTime}}</h4>
                    <h4><i class="el-icon-guide"/><strong>工作内容:</strong></h4>
                    <p>
                        {{item.content}}
                    </p>
                    <p></p>
                </div>

        </div>

    </div>
</template>

<script>
    export default {
      props:{
        experience:{
          type: Array
        }
      },
      data(){
        return{
          isActive: false
        }
      },
      methods: {
        changeAnimation(isIn){
          this.isActive =isIn
        }
      }
    }
</script>

<style lang="scss">
    .base_experience_container{
        hr{
            border-color: #f7dc6f !important;
        }
        h2{
            color: #000000;
        }
        background: url("../../assets/img/about.jpg") #f4d03f no-repeat fixed center left;
        backdrop-filter: blur(10px);
        background-size: 25%;
    }
    .experience_container{

        color: #444;
        padding-left: 25%;
        .experience_item{
            display: inline-block;
            max-width: 600px;
            margin: 10px 20px;
            padding-left: 3px;
            border-left: 2px solid rgba(0,0,255,0.4);
            border-right: 2px solid rgba(0,0,255,0.4);
            border-radius: 10%;
            h4{
                text-align: left;
                margin: 5px 0;
                font-size: 16px;
                color: #111;
                font-weight: 300;
                letter-spacing: 1px;
            }
            strong{
                font-weight: 500;
            }
            p{
                font-size: 15px;
                text-align: left;
                max-width: 500px;
                margin: 5px 0 0 17px;
                letter-spacing: 1px;
            }
        }
    }

</style>
