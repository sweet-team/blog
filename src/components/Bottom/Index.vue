<template>
    <div class="bottom">
        <div class="links_container">
            <h4>友情链接</h4>
            <div>
                <router-link class="links" v-for="(item, i) in links" :key="i" :to="item.url">{{item.name}}</router-link>
            </div>
        </div>
        <div class="copy_container">
            <h4>版权信息</h4>
            <p>Copyright@null by LiXue. Design UI by copy and element-ui.</p>
        </div>
    </div>
</template>
<script>
export default {
  mounted() {
    this.init();
  },
  data(){
    return{
      links:[],
    }
  },
  methods:{
    init(){
      this.$api.Site.friendLinks().then(res => {
        this.links= res
      })
    }
  }
}
</script>

<style lang="scss">
    @import "../../assets/css/index";
    .bottom{
        padding: 20px 0;
        background-color: #f5f5f5;
        color:$font_color_blog_1;
        h4{
            color: $font_color_blog_2;
            padding-bottom: 20px;
            border-bottom: solid 1px $font_color_blog_1;
        }
        .links_container,  .copy_container{
            display: inline-block;
            vertical-align: top;
            margin: 0 20px;
            text-align: left;
        }
        .links_container{
            margin-right: 10%;
        }
        .links{
            display: block;
            margin: 5px 0;
            letter-spacing: 1px;
        }
        .links:hover{
            color: $font_color;
        }
    }
</style>
