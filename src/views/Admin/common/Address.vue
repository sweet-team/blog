<template>
    <div>
        <el-cascader  v-model="address" :options="options" :props="{}"></el-cascader>
    </div>
</template>
<script>
    export default {
      model:{
        prop:'address',
        event: 'input'
      },
      props:{
        address:{
          type: Array
        },
      },
      data(){
        return{
          options:[]
        }
      },
      methods:{
        emit(data){
          this.$emit('input',data);
        }

      }
    }
</script>
