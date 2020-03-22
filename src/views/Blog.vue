<template>
    <div class="blog_container">
        <Header />
        <div class="blog_info_base">
            <div class="blog_info"  v-masonry stagger="30"  fit-width="true" horizontal-order="true"  transition-duration="0.3s" item-selector=".item" stamp=".stamp">
                <Abstract  v-masonry-tile class="item"   v-for="(item ,k ) in abstracts"  :key="k" v-bind:abstract="item" />
                <Banner v-masonry-tile class="stamp" />
            </div>
        </div>
        <Bottom />
    </div>
</template>
<script>
    import Header from '../components/Blog/Header'
    import Banner from '../components/Blog/Banner'
    import Abstract from '../components/Blog/Abstract'
    import Bottom from '../components/Bottom/Index'
export default {
      components:{
        Header,
        Banner,
        Abstract,
        Bottom,
      },
  data(){
        return{
          abstracts:[],
          a:{
            columnWidth:190
          }
        }
  },
  mounted() {
        this.init()
  },
  methods:{
        init(){
            this.$api.Message.abstracts().then(res => {
              this.abstracts = res
            })
        },
  },
}
</script>

<style lang="scss">
.blog_info{
    margin: 0 auto;
}
.blog_info_base{
}
.blog_container{
    background-color: #f5f5f5;
}
</style>
