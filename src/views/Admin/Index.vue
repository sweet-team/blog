<template>
    <div>
        <Header />
        <SlideBar />
        <!--<div class="base_container">
            <Tags />
            <router-view />
        </div>-->
        <div class="content-box" :class="{'content-collapse':collapse}">
            <Tags />
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>
<script>
    import SlideBar from './common/Sidebar'
    import Header from './common/Header'
    import Tags from './common/Tags'
    import bus from './common/bus'
    export default {
      components:{
        SlideBar,
        Tags,
        Header,
      },
      data(){
        return{
          tagsList: [],
          collapse: false
        }
      },
      created() {
        bus.$on('collapse-content', msg => {
          this.collapse = msg;
        });

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
          let arr = [];
          for (let i = 0, len = msg.length; i < len; i++) {
            msg[i].name && arr.push(msg[i].name);
          }
          this.tagsList = arr;
        });
      }
    }
</script>
<style lang="scss">
    .wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .content-box {
        position: absolute;
        left: 250px;
        right: 0;
        top: 70px;
        bottom: 0;
        padding-bottom: 30px;
        -webkit-transition: left .3s ease-in-out;
        transition: left .3s ease-in-out;
        background: #f0f0f0;
        text-align: left;
    }

    .content {
        width: auto;
        height: 100%;
        padding: 10px;
        overflow-y: scroll;
        box-sizing: border-box;
        .el-card{
            color: #606266;
        }
        h3{
            margin:  -20px 0 10px 0;
        }
    }

    .content-collapse {
        left: 65px;
    }

    .container {
        padding: 30px;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin-bottom: 20px;
    }

    .crumbs {
        margin: 10px 0;
    }

    .el-table th {
        background-color: #f5f7fa !important;
    }

    .pagination {
        margin: 20px 0;
        text-align: right;
    }

    .plugins-tips {
        padding: 20px 10px;
        margin-bottom: 20px;
    }

    .el-button+.el-tooltip {
        margin-left: 10px;
    }

    .el-table tr:hover {
        background: #f6faff;
    }

    .mgb20 {
        margin-bottom: 20px;
    }

    .move-enter-active,
    .move-leave-active {
        transition: opacity .5s;
    }

    .move-enter,
    .move-leave {
        opacity: 0;
    }

    /*BaseForm*/

    .form-box {
        width: 600px;
    }

    .form-box .line {
        text-align: center;
    }

    .el-time-panel__content::after,
    .el-time-panel__content::before {
        margin-top: -7px;
    }

    .el-time-spinner__wrapper .el-scrollbar__wrap:not(.el-scrollbar__wrap--hidden-default) {
        padding-bottom: 0;
    }

    /*Upload*/

    .pure-button {
        width: 150px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        border-radius: 3px;
    }

    .g-core-image-corp-container .info-aside {
        height: 45px;
    }

    .el-upload--text {
        background-color: #fff;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        box-sizing: border-box;
        width: 360px;
        height: 180px;
        text-align: center;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .el-upload--text .el-icon-upload {
        font-size: 67px;
        color: #97a8be;
        margin: 40px 0 16px;
        line-height: 50px;
    }

    .el-upload--text {
        color: #97a8be;
        font-size: 14px;
        text-align: center;
    }

    .el-upload--text em {
        font-style: normal;
    }

    /*VueEditor*/

    .ql-container {
        min-height: 400px;
    }

    .ql-snow .ql-tooltip {
        transform: translateX(117.5px) translateY(10px) !important;
    }

    .editor-btn {
        margin-top: 20px;
    }

    /*markdown*/

    .v-note-wrapper .v-note-panel {
        min-height: 500px;
    }
</style>
