<template>
  <div class="carts">
    <div class="shopping_vehicle">
      <div class="shopping">
        <div class="shopping1">
          <div class="sp1">
            <a href="#"></a>
            <span class="sp2">购物车</span>
            <span class="sp3"></span>
          </div>
        </div>
        <div class="vehicle">
          <div class="sv1"><span></span></div>
          <div class="sv2">购物车是空的</div>
          <div class="sv3">
            <a href="#">去逛逛</a><a href="#">我的收藏</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .carts
    width 100%
    height 100%
    background #f3f5f7
    .shopping
      width 100%
      height 340px
      padding-bottom 60px
      box-sizing border-box
      background white
      .shopping1
        box-sizing border-box
        width 100%
        height 50px
        display block
        color #333
        border-bottom 2px solid #f3f4f5
        .sp1
          width 100%
          height 100%
          line-height 50px
          position relative
          background #fff
          text-align center
          box-sizing border-box
          padding 0 10px
          a
            background url(./1.png) no-repeat
            background-size :9px 17px
            display block
            width 22px
            height 20px
            position absolute
            margin-top 16px
            text-decoration none
          .sp2
            width 90%
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            display inline-block
            margin 0 auto
            font-size 18px
            color #333
            line-height 50px
            text-align center
          .sp3
            background url(./2.png) no-repeat
            background-size 20px 20px
            width 20px
            height 20px
            margin-top 14px
            float right
            text-align center
      .vehicle
        width 100%
        height 298px
        display block
        .sv1
          width 100%
          height 170px
          text-align center
          span
            display inline-block
            margin 50px auto 20px
            width 100px
            height 100px
            background url(./3.png) no-repeat 0 -160px
            background-size 105px auto
        .sv2
          color #dbdbdb
          font-size 16px
          text-align center
          display block
        .sv3
          width 100%
          height 40px
          margin-top 15px
          display block
          text-align center
          a
            width 100px
            height 40px
            display inline-block
            border-radius 5px
            border 1px solid #999
            line-height 40px
            color #999
            font-size 16px
            margin-right 8px
            text-decoration none
</style>
