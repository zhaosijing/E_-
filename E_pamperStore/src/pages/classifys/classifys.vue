<template>
  <div class="classifys">
    <div class="cl_top">
      <div class="class">
        <span class="cl1"><router-link to="/classifys">分类</router-link></span>
      </div>
      <div class="brand">
        <span class="cl2"><router-link to="/classifys/brand">品牌</router-link></span>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .classifys
    width 100%
    margin-bottom 46px
    .cl_top
      position fixed
      top 0
      padding 0 15px
      width 100%
      height 40px
      background white
      border-bottom 1px solid #f3f5f7
      display flex
      justify-content space-around
      align-items center
      font-size 14px
      z-index 20
      .class
        position absolute
        left 0
        text-align right
        padding-right 5%
        width 49%
        height 40px
        line-height 40px
        font-size 13px
        font-weight 700
        box-sizing border-box
        .cl1
          display: inline-block
          width 34px
          height 40px
          line-height: 40px
          align-items center
          cursor pointer
          color #ed4044
          border-bottom 2px solid #ed4044
      .brand
        position absolute
        top 0
        right 0
        text-align left
        padding-left 5%
        width 49%
        height 40px
        line-height 40px
        font-size 13px
        font-weight 700
        box-sizing border-box
      .cl2
        display: inline-block
        width 34px
        height 40px
        line-height: 40px
        align-items center
        cursor pointer
</style>
