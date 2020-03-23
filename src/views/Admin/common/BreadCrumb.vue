<template>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,i) in bread" :key="i" >
                <i class="el-icon-setting" v-if="i === 0" /> {{item}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
    export default {
      props:{
        bread:{
          type:Array
        }
      }
    }
</script>
