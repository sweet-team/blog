<template>
    <router-link :to="to">
        <div class="arrow-down">
            <i class="el-icon-d-arrow-right font_color"></i>
        </div>
    </router-link>

</template>
<script>
export default {
  props:{
    to:{
      type:String
    }
  }
}
</script>

<style lang="scss">
    @import "../../assets/css/index.scss";
.arrow-down{
    border: rgba(255,255,255,.2) 2px solid;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    i{
        transform: rotate(90deg);
        font-size: 25px;
        transition: font-size .2s;
    }
}
    .arrow-down:hover{
        background: rgba(255,255,255,.1);
        i{
            border-radius: 50%;
            font-size: 30px;
            transition: font-size .2s;
        }
    }
</style>
