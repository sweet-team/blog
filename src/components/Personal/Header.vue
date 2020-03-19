<template>
    <el-row class="header animated" v-bind:class="{animate_in_top:isActive,animate_in_bottom:!isActive}">
        <el-col :lg="{span:16, offset: 3 }"
                :md="{span:19, offset: 2 }"
                :sm="{span:22, offset: 1 }"
                :xs="{span:24, offset: 0 }"
                class="header_container">
            <div class="header_item to_blog_container">
                <router-link :to="this.$store.state.toBlogUrl"><i class="font_color el-icon-arrow-right">_</i><span class="to_blog">前往个人博客</span></router-link>
            </div>
            <div class="header_item">
                <Nav v-bind:links="this.links"/>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import Nav from '../Nav/Index.vue'
export default {
  props: {

  },
  components: {
    Nav
  },
  data() {
    return{
      isActive: true,
      links: this.$store.state.toPersonalUrl
    }
  },
  methods:{
    changeAnimate(isInTop){
        this.isActive = isInTop
    },
  }
};
</script>

<style lang="scss">
@import "../../assets/css/index.scss";
.animate_in_bottom{
    padding: 0;
    background-color: #000;
    transition: all 1s;
}
.animate_in_top{
    padding: 20px 0;
    transition: all .8s;
}
.to_blog_container{
    :hover{
        color: $font_color;
    }
}
.to_blog {
    font-size: $font_size_18+px;
    font-weight: 800;
}
.el-icon-arrow-right{
    font-weight: 900;
}
    .font_color{

    }
    .header{
        position: fixed;
        z-index: 1;
        .header_container{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        width: 100%;
        .header_item{
            padding: 15px 0;
        }
    }
</style>
