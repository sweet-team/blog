<template>
    <div class="base_info_container base_personal_container">
        <h2>基本 <strong>资料</strong></h2>
        <hr />
        <div class="base_info_item_container ">
            <div class="base_info_item animated " v-bind:class="{bounceInLeft:isActive, bounceOutLeft:!isActive }" >
                <i class="el-icon-monitor"></i>
                <h4 class="font_color">个人信息</h4>
                <p>姓名:{{this.$store.state.aboutMe.name}}; 性别:{{this.$store.state.aboutMe.sex}}<br/>
                    年龄:{{this.$store.state.aboutMe.age}}岁; 所在地:{{this.$store.state.aboutMe.place}}
                </p>
            </div>
            <div class="base_info_item animated " v-bind:class="{bounceInLeft:isActive, bounceOutLeft:!isActive }"  >
                <i class="el-icon-s-flag"></i>
                <h4 class="font_color">专业学历</h4>
                <p>专业：{{this.$store.state.aboutMe.direction}}<br>
                    学历：{{this.$store.state.aboutMe.collegeType}}
                </p>
            </div>
            <div class="base_info_item animated " v-bind:class="{bounceInLeft:isActive, bounceOutLeft:!isActive }"  >
                <i class="el-icon-s-marketing"></i>
                <h4 class="font_color">毕业学校</h4>
                <p>毕业学校：{{this.$store.state.aboutMe.college}} <br>
                    专业方向：{{this.$store.state.aboutMe.direction}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      isActive: false
    }
  },
  methods: {
    addChangeAnimate(b){
      this.isActive = b
    }
  }
}
</script>

<style lang="scss">
    @import "../../assets/css/index.scss";
    .base_info_container{
        background: linear-gradient(to bottom, #6f7275 0%, #31353a 100%);
        h2{
            margin: 40px 0 0 0;
            padding: 20px 0;
        }
    }
    .base_info_item_container{
        display: flex;
        justify-content: center;
        flex-direction: row;
        justify-content: space-around;
        padding: 40px 0;

    }
    .base_info_item{
        i{
            font-size: 50px;
            padding: 34px;
            box-sizing: border-box;
            background-color: #474b4f;
            border-radius: 50%;
            color: #aaa;
        }
        i:hover{
            color: $font_color;
        }
        p{
            color: #aaa;
            letter-spacing: 2px;
        }
    }

</style>
