<template>
    <div class="base_personal_container base_self_evaluation">
        <h2>自我 <strong>评价</strong></h2>
        <hr>
        <p>{{content}}</p>
    </div>
</template>
<script>
export default {
  props:{
    content:{
      type:String
    }
  }
}
</script>
<style lang="scss">
    .base_self_evaluation{
        background: url("../../assets/img/testimonial-bg-4.jpg") no-repeat fixed 0% bottom;
        background-size: cover;

        p{
            font-size: 20px;
            margin: 30px auto;
            letter-spacing: 1px;
            max-width: 800px;
            display: inline-block;
            color: #ddd;
            line-height: 30px;
        }
    }

</style>
