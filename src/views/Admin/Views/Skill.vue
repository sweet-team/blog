<template>
<div>
    <bread-crumb :bread="['我的技能']" />
    <div class="container">
        <el-card content="box-card">
            <div slot="header">
                <span>工作技能</span>
                <el-button style="float: right; padding:3px 0"  @click="editAction = true" type="text">
                    添加
                </el-button>
            </div>
            <tree-grid
                    :columns="columns"
                    :tree-structure="false"
                    :data-source="skill"
            />
        </el-card>
    </div>
    <el-dialog
            :visible.sync="editAction"
            :before-close="handlerClose"
            title="编辑/添加技能"
    >
        <div class="form-box">
            <el-form :model="form" ref="form" label-width="80px">
                <el-form-item label="技能图片" size="mini">
                    <img-upload v-model="form.img" v-bind:edit-status="'baseInfo'" />
                </el-form-item>
                <el-form-item label="名称" size="mini">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="熟练度" size="mini">
                    <el-input-number placeholder="1-100" v-model="form.level"  :min="1" :max="100"  label="熟练度在1-100之间"></el-input-number>
                </el-form-item>
                <el-form-item label="技能平台" size="mini">
                    <el-input placeholder="例如PC平台，Linux平台，安卓" v-model="form.platform"></el-input>
                </el-form-item>
                <el-form-item label="是否显示" size="mini">
                    <el-checkbox v-model="form.show">显示在主页？</el-checkbox>
                </el-form-item>

                <el-form-item label="技能描述" size="mini">
                    <el-input type="textarea" v-model="form.intro" rows="5"/>
                </el-form-item>

            </el-form>
        </div>

        <span slot="footer" class="dialog-footer">
            <el-button @click="editAction = false" size="mini">取 消</el-button>
            <el-button type="primary" @click="handlerSubmit()" size="mini">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>
<script>
  import TreeGrid from "../common/TreeGrid/TreeGrid";
  import BreadCrumb from "../common/BreadCrumb";
  import ImgUpload from "../common/ImgUpload";

  export default {
    components:{
      TreeGrid,
      BreadCrumb,
      ImgUpload,
    },
    mounted() {
        this.init()
    },
    methods:{
      handlerSubmit(){},
      init(){
        this.$api.Personal.skill().then(res => {
          this.skill = res
        })
      },
      handlerClose(done){
        this.$confirm('确认关闭？')
            .then(() => {
              done();
            })
            .catch(() => {});
      }
    },
    data(){
      return{
        skill: [],
        form:{},
        editAction: false,
        columns: [{
          text: '技能名称',
          dataIndex: 'name',
          width: ''
        }, {
          text: '技能图片',
          dataIndex: 'img',
          width: '',
          img: true
        }, {
          text: '熟练度',
          dataIndex: 'level',
          width: ''
        }, {
          text: '技能平台',
          dataIndex: 'platform',
          width: ''
        },{
          text: '技能介绍',
          dataIndex: 'intro',
          width: ''
        },{
          text: '是否展示',
          dataIndex: 'show',
          width: ''
        }],
      }
    }
  }
</script>
