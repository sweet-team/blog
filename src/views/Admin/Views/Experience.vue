<template>
    <div>
        <bread-crumb v-bind:bread="['工作经历']" />
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
                        :data-source="experience"
                />
            </el-card>
        </div>
        <el-dialog
                :visible.sync="editAction"
                :before-close="handlerClose"
                title="编辑/添加工作经历"
        >
            <div class="form-box">
                <el-form :model="form" ref="form" label-width="80px">
                    <el-form-item label="工作地点" size="mini">
                        <Address v-model="form.place" />
                    </el-form-item>
                    <el-form-item label="工作岗位" size="mini">
                        <el-input v-model="form.post"></el-input>
                    </el-form-item>
                    <el-form-item label="起止时间" size="mini">
                        <el-date-picker
                                v-model="form.date"
                                type="monthrange"
                                range-separator="至"
                                start-placeholder="起始工作时间"
                                end-placeholder="结束工作时间"
                                value-format="string"
                        ></el-date-picker>
                    </el-form-item>
                    <el-form-item label="是否显示" size="mini">
                        <el-checkbox v-model="form.show">显示在主页？</el-checkbox>
                    </el-form-item>

                    <el-form-item label="工作内容" size="mini">
                        <el-input minlength="37" show-word-limit maxlength="62" placeholder="请将内容控制在37-62个中文字符以内(包括中文标点)" type="textarea" v-model="form.content" rows="5"/>
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
  import BreadCrumb from "../common/BreadCrumb";
  import Address from "../common/Address";
  import TreeGrid from "../common/TreeGrid/TreeGrid";

  export default {
  components:{
    BreadCrumb,
    TreeGrid,
    Address,
  },
  mounted() {
    this.init()
  },
    watch:{
        form:{
          handler(newValue,oldValue){
            let b = newValue.date && newValue.date[0] === oldValue.date[0] && oldValue.date[1] === newValue[1]

            if(!b){
              this.form.startTime = newValue.date[0]
              this.form.endTime = newValue.date[1]
            }
          },
          deep: true,
        }
    },
  methods:{
    init(){
      this.$api.Personal.experience().then(res=>{
        this.experience = res
      })
    },
    handlerSubmit(){},
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
      experience:[],

      form: {},
      editAction: false,
      columns: [{
        text: '工作地址',
        dataIndex: 'place',
        width: ''
      }, {
        text: '工作岗位',
        dataIndex: 'post',
        width: ''
      }, {
        text: '工作内容',
        dataIndex: 'content',
        width: ''
      }, {
        text: '开始时间',
        dataIndex: 'startTime',
        width: ''
      },{
        text: '结束时间',
        dataIndex: 'endTime',
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

<style lang="scss"></style>
