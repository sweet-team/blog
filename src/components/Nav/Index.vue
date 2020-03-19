<template>
    <ul class="nav">
        <li v-for="item in links" :key="item.url">
            <router-link :to="item.url" >{{item.name}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
  props:{
    links:{
      type: Array
    }
  }
}
</script>

<style lang="scss">
    @import "../../assets/css/index.scss";
.nav{
    display: block;
    margin: 0;
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
