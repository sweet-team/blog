<template>
    <ul class="nav">
        <li v-for="item in links" v-bind:class="{active:item.url === activeUrl}" :key="item.url">
            <ul class="children" v-if="item.children != undefined && item.children.length > 0 ">
                <li v-for="temp in item.children" :key="temp.id">
                    <router-link :to="item.url+'/'+temp.id">{{temp.name}}</router-link>
                </li>
            </ul>
            <router-link :to="item.url" v-else>{{item.name}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
  props:{
    links:{
      type: Array
    },
    activeUrl:{
      type: String
    }
  },
  methods:{

  }
}
</script>

<style lang="scss">
    @import "../../assets/css/index.scss";
.nav{
    display: block;
    margin: 0;
    a{
        color:white;
    }
    li{
        display: inline-block;
        padding:0 15px;
        :hover{
            color: $font_color;
        }
    }
    a{
        font-size: $font_size_14+px;
    }
}

</style>
