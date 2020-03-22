<template>
    <div class="blog_header_container">
        <HeaderImg v-bind:max-container-width="'60px'" />
        <Nav v-bind:links="links" />
    </div>
</template>
<script>
    import Nav from '../Nav/Index'
    import HeaderImg from '../HeaderImg/Index'
export default {
    components:{
      Nav,
      HeaderImg
    },
  mounted() {
    this.init();
  },
  data(){
      return{
        links: []
      }
  },
  methods:{
      init(){
        //请求接口获取文章分类
        this.links = this.$store.state.blogUrl
      }
  },
}
</script>

<style lang="scss">
    @import "../../assets/css/index";
    .blog_header_container{
        background: #ddd url("../../assets/img/bg-blog.png");
        background-size: 30px 30px;
        padding: 35px 0;
        margin: 0 0 45px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        a{
            color: $font_color_blog_1;
        }
        a:hover{
            color: $font_color_blog_2;
        }
    }

</style>
