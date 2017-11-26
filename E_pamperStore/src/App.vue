<template>
  <div class="app">
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="tab">
      <div class="footer">
        <div class="tab-item icon-home">
          <router-link to="/homes">首页</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/classifys">分类</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/shoppingCarts">购物车</router-link>
        </div>
        <div class="tab-item icon-profile">
          <router-link to="/myPet">我的E宠</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 667px
    .content
      width 100%
      height 620px
    .tab
      width 100%
      height 47px
      .footer
        display flex
        justify-content space-around
        align-items center
        border-top 1px solid #e7e7e7
        height 45px
        line-height 45px
        position fixed
        bottom 0
        left 0
        width 100%
        background white
        z-index 10
        .tab-item
          display inline-block
          font-size 14px
          .active
            color green

</style>
