<template>
    <div class="upload">
        <img :src="img" alt="">
        <el-upload
                v-if="editStatus === 'baseInfo'"
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="1"
                :on-exceed="handleExceed"
                :file-list="fileList">
            <el-button size="mini" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
<script>
    export default {
      model:{
        prop: 'img',
        event: 'input'
      },
      props:{
        img:{
          type:String
        },
        editStatus:{
          type:String
        }
      },
      data(){
        return{
          fileList:[],

        }
      },
      methods:{
        //v-on：input=“x = arguments[0]” 与 v-bind：value=“x”
        emitImg(url){
          this.$emit("input",url)
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
        handleExceed(files, fileList) {
          this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
          console.log(fileList);
          return this.$confirm(`确定移除 ${file.name}？`);
        }
      }
    }
</script>
<style lang="scss">
    .upload{
        img{
            width: 130px;
            height: 130px;
            border-radius: 50%;
            margin-right: 20px;
        }
    }
    .upload-demo{
        display: inline-block;
    }
    .el-upload--text{
        display: inline-block;
        height: auto;
        width: auto;
        border: none;
    }
</style>
