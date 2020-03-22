<template>
    <div class="base_personal_container base_contact_container">
        <h2><strong>联系</strong> 方式</h2>
        <hr>
        <div class="contact_base">
            <div>
                <i class="el-icon-location"></i>
                <h4>Location: {{contact.place}}</h4>
            </div>
            <div>
                <i class="el-icon-tickets"></i>
                <h4>Email: {{contact.email}}</h4>
            </div>
            <div>
                <i class="el-icon-dish-1"></i>
                <h4>weChat: {{contact.weChat}}</h4>
            </div>
        </div>
        <div class="contact_from">
            <h4>给我发邮件</h4>
            <el-form :model="contactMe" class="form">
                <el-form-item class="form_input float_left">
                    <el-input v-model="contactMe.name" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item class="form_input">
                    <el-input v-model="contactMe.email" placeholder="您的邮箱"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="textarea" :rows="8"  v-model="contactMe.content" placeholder="留言内容"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-button class="form_button" type="primary" @click="onSubmit">确认发送</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>
<script>
export default {
  props:{
    contact: {
      type: Object
    }
  },
  data(){
    return{
      contactMe:{
      },
    }
  },
  methods:{
    onSubmit(){
      console.log('submit!');
    }
  },
}
</script>

<style lang="scss">
    @import "../../assets/css/index.scss";
.base_contact_container{
    background: linear-gradient(to bottom, #ffffff 0%, #cccccc 100%);
    h2{
        color: #555;
    }
    .contact_from{
        h4{
            color: #555;
            margin-top: 0;
            letter-spacing: 1px;

        }
    }
    .form{
        width: 800px;
        margin: 0 auto;
        .form_input{
            display: inline-block;
            float: right;
            width: 380px;
            position: relative;
            z-index: 1;
        }
        .form_button{
            background-color: #aaa;
            border: none;
        }
        .form_button:hover{
            background-color: $font_color;
            color: #555;
        }
        .float_left{
            float: left;
        }
    }
    .contact_base{
        padding: 30px 0;
        div{
            display: inline-block;
            margin: 0 25px;
        }
        i{
            font-size: 40px;
            color: $font_color;
        }
        h4{
            margin-top: 10px;
            color: #555;
        }
    }
    .el-input.is-active .el-input__inner, .el-input__inner:focus{
        border-color: $font_color;
    }
    .el-textarea__inner:focus{
        border-color: $font_color;
    }
}
</style>
