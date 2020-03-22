<template>
    <div class="base_personal_container base_skill_container">
        <h2>专业 <strong>技能</strong></h2>
        <hr>
        <el-carousel type="card" :interval="3000" class="skill_container" height="350px" >
            <el-carousel-item  class="skill_item" v-for="(skill,i) in skills" :key="i">
                <div class="skill_plat_form">{{skill.platform}}</div>
                <img :src="skill.img" alt="">
                <div class="skill_progress_container">
                    <el-progress :text-inside="true" :stroke-width="19" :percentage="skill.level" />
                </div>
                <h4>{{skill.name}}</h4>
                <p>{{skill.intro}}</p>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
  props:{
    skills:{
      type: Array,
      require:true
    },
  },
  data(){
    return{
      height: {
        type: String
      }
    }
  },
  mounted() {

  },
  methods:{
  }
}
</script>

<style lang="scss">
    @import "../../assets/css/index.scss";
    .base_skill_container{
        h2{
            color: #555;
        }
        background: #eee
    }
    .skill_container{
        /*display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        overflow: hidden;*/
        margin: 40px 0 0 0 ;

        box-sizing: border-box;
        .skill_item{
            .skill_plat_form{
                position: absolute;
                right: 10%;
                top: 35%;
                padding: 2px 15px;
                border: solid 2px #42b983;
                border-radius: 4px;
            }
            .skill_progress_container{
                width: 30%;
                margin: 20px auto;
            }
            h4{
                color: #555;
            }
            p{
                width: 60%;
                margin: 0 auto;
                letter-spacing: 1px;
                color: #111;
            }
            img{
                width: 120px;
                height: 120px;
                border-radius: 50%;
                box-sizing: border-box;
                margin-top: 20px;
            }
            img:hover{
                border: solid 5px $font_color;
            }
        }
        .el-progress-bar__inner{
            background-color: $font_color
        }
        .el-progress-bar__innerText{
            color: #555;
        }
        .el-carousel__indicators--outside button{
            background-color: #42b983;
        }
        .el-carousel__item:nth-child(2n) {
            background-color: #f5f5f5;
            border-radius: 6px;
            p{
                color: #666;
            }
        }

        .el-carousel__item:nth-child(2n+1) {
            background-color: #ddd;
            border-radius: 6px;
            p{
                color: #333;
            }
        }

    }


</style>
