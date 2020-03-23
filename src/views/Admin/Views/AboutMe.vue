<template>
    <div>
        <bread-crumb :bread="['我的信息']" />
        <div class="container">
            <el-card class="box-card">
                <div slot="header">
                    <span>基本信息</span>
                    <el-button style="float: right; padding:3px 0" v-if="editStatus !== 'baseInfo'" @click="editHandler('baseInfo')" type="text">
                        编辑
                    </el-button>
                    <el-button style="float: right; padding:3px 0" v-if="editStatus === 'baseInfo'" @click="editFinishHandler('baseInfo')" type="text">
                        完成
                    </el-button>
                </div>
                <div class="form-box" type="mini">
                    <el-form
                            ref="baseInfo"
                            :model="baseInfo"
                            label-width="80px"
                    >
                        <el-form-item label="头像" size="mini">
                            <img-upload v-model="baseInfo.proUrl" v-bind:edit-status="editStatus" />
                        </el-form-item>
                        <el-form-item label="姓名" size="mini" >
                            <el-input v-model="baseInfo.name" v-if="editStatus === 'baseInfo'"></el-input>
                            <span v-else>{{baseInfo.name}}</span>
                        </el-form-item>
                        <el-form-item label="性别" size="mini">
                            <el-radio-group v-model="baseInfo.sex" v-if="editStatus === 'baseInfo'">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                            </el-radio-group>
                            <div class='span' v-else>{{baseInfo.sex}}</div>
                        </el-form-item>
                        <el-form-item label="出生日期" size="mini">
                            <el-date-picker v-if="editStatus === 'baseInfo'" v-model="baseInfo.age" type="date" placeholder="请选择出生日期" format="yyyy-MM-dd" value-format="timestamp"></el-date-picker>
                            <div class='span' v-else>{{baseInfo.age}}</div>
                        </el-form-item>
                        <el-form-item label="所在地" size="mini">
<!--                            <el-cascader v-if="editStatus === 'baseInfo'" v-model="baseInfo.place" :options="options" :props="{}"></el-cascader>-->
                            <Address v-if="editStatus === 'baseInfo'" v-model="baseInfo.place" v-bind:edit-status="baseInfo"/>
                            <div class='span' v-else>{{baseInfo.place}}</div>
                        </el-form-item>
                        <el-form-item label="毕业学校" size="mini">
                            <el-input v-if="editStatus === 'baseInfo'" v-model="baseInfo.college"></el-input>
                            <div class='span' v-else>{{baseInfo.college}}</div>
                        </el-form-item>
                        <el-form-item label="专业" size="mini">
                            <el-input v-if="editStatus === 'baseInfo'" v-model="baseInfo.major"></el-input>
                            <div class='span' v-else>{{baseInfo.major}}</div>
                        </el-form-item>
                        <el-form-item label="专业方向:" size="mini">
                            <el-input v-if="editStatus === 'baseInfo'" v-model="baseInfo.direction"></el-input>
                            <div class='span' v-else>{{baseInfo.direction}}</div>
                        </el-form-item>
                        <el-form-item label="座右铭" size="mini">
                            <el-input v-if="editStatus === 'baseInfo'" v-model="baseInfo.motto"></el-input>
                            <div class='span' v-else>{{baseInfo.motto}}</div>
                        </el-form-item>
                        <el-form-item label="学历" size="mini">
                            <el-input v-if="editStatus === 'baseInfo'" v-model="baseInfo.collegeType"></el-input>
                            <div class='span' v-else>{{baseInfo.collegeType}}</div>
                        </el-form-item>
                        <el-form-item label="邮箱" size="mini">
                            <el-input v-if="editStatus === 'baseInfo'" v-model="baseInfo.email"></el-input>
                            <div class='span' v-else>{{baseInfo.email}}</div>
                        </el-form-item>
                        <el-form-item label="微信" size="mini">
                            <el-input type="email" v-if="editStatus === 'baseInfo'" v-model="baseInfo.weChat"></el-input>
                            <div class='span' v-else>{{baseInfo.weChat}}</div>
                        </el-form-item>
                        <el-form-item label="自我评价" size="mini">
                            <el-input v-if="editStatus === 'baseInfo'" v-model="baseInfo.evaluation" type="textarea" rows="5"></el-input>
                            <div class='span' v-else>{{baseInfo.evaluation}}</div>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    import BreadCrumb from "../common/BreadCrumb";
    import ImgUpload from "../common/ImgUpload";
    import Address from '../common/Address'
export default {
  components: {
    BreadCrumb,
    ImgUpload,
    Address
  },
  data(){
    return{
      baseInfo:{},

      editStatus: '',

    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init(){
      this.$api.Personal.info('admin').then(res => {
        this.baseInfo = res
      })
    },
    editHandler(type) {
      this.editStatus = type

      console.log(type)
    },
    editFinishHandler(type){
      this.editStatus = "false"
      console.log(type)

    },

  }
}
</script>
<style lang="scss">
</style>
