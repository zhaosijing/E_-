<template>
  <div class="homes_header">
    <div class="htop">
      <div class="main">
        <div class="area">
          <a href="#">
            <div class="count" @click="toggleShow">
              <span>狗狗站</span>
              <span>|</span>
              <span>重庆</span>
              <i></i>
            </div>
          </a>
        </div>
        <p>
          <a href="">
            <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
            <span class="search"></span>
          </a>
        </p>
        <a href="#">
          <img src="./mydope.png" alt="">
        </a>
      </div>
    </div>
    <div class="hnav" ref="findNav">
      <div class="find">
        <div class="findList">
          <router-link to="/homes">首页</router-link>
        </div>
        <div class="findList">
          <router-link to="/homes/clothing_city">服饰城</router-link>
        </div>
        <div class="findList">
          <router-link to="/homes/dog_formulas">狗狗主粮</router-link>
        </div>
        <div class="findList">
          <router-link to="/homes/health_care">医疗保健</router-link>
        </div>
        <div class="findList">
          <router-link to="/homes/snack_toys">零食玩具</router-link>
        </div>
        <div class="findList">
          <router-link to="/homes/daily">日用外出</router-link>
        </div>
        <div class="findList">
          <router-link to="/homes/features">美容香液</router-link>
        </div>
      </div>
    </div>
    <div class="mask" v-show="isShow">
      <div class="wrapper">
        <scroller>
          <div class="wrapper1" style="padding-bottom: 46px;">
            <header class="head_top">
              <div class="head_con">
                <a href="#" class="a" @click="toggleShow"></a>
                <span class="text">选择收货地区</span>
                <span class="text1"></span>
              </div>
            </header>
            <div class="mask_content">
              <div class="cont_top">
                <a href=""><span class="s1">猫猫站</span></a>
                <a href=""><span>狗狗站</span></a>
                <a href=""><span>水族站</span></a>
              </div>
              <div class="city">
                <div class="city1">
                  <span>当前默认地址：</span><span>重庆 渝中区</span>
                </div>
              </div>
            </div>
            <div class="city2">
              <template>
                <v-distpicker type="mobile"></v-distpicker>
              </template>
            </div>
          </div>
        </scroller>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    data(){
      return {
        isShow:false
      }
    },
    methods:{
      toggleShow(){
        this.isShow = !this.isShow
      }
    },
    mounted(){
      new BScroll(this.$refs.findNav, {
        click: true, //分发点击事件
        scrollX: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .homes_header
    height 86px
    width 100%
    position fixed
    left 0
    top 0
    background #fff
    z-index 9
    box-sizing border-box
    .htop
      padding 5px 10px
      margin 0
      .main
        display flex
        justify-content space-around
        align-items center
        padding 8px 0
        background #fff
        text-align center
        display -webkit-box
        width 100%
        .area
          font-size 14px
          margin-right 20px
          float left
          position relative
          i
            position absolute
            top 10px
            right -11px
            border-width 4px
            font-size 0
            line-height 0
            border-style solid
            border-color #898989 transparent transparent
            font-style normal
        p
          position relative
          width 219px
          height 25px
          a
            color #333
            input
              flex-grow 18
              width 100%
              height 25px
              background #e9e9e9
              border-radius 4px
              color #bcbcbc
              text-indent 10px
              font-size 13px
              outline 0
            .search
              height 11px
              width 11px
              position absolute
              right 5px
              top 0
              bottom  0
              background url(./search.png)
              background-size 11px auto
            span
              width 11px
              height 11px
              position absolute
              right 5px
              top 0
              bottom 0
              margin auto 0
              background-position 0

        a
          display block
          text-decoration none
          img
            width 25px
            height 25px
            margin-left 10px
            vertical-align middle
    .hnav
      width 100%
      height 35
      min-width 32px
      overflow hidden
      .find
        height 35px
        width 140%
        display flex
        justify-content space-around
        align-items center
        white-space nowrap
        list-style none
        .findList
          display inline-block
          margin-left 10px
          height 36px
          float left
          list-style none
          line-height 36px
          font-size 14px
          text-align center
    .mask
      width 100%
      height 667px
      position absolute
      top 0
      background #fff
      overflow hidden
      z-index 15
      .wrapper
        width 100%
        height 667px
        overflow hidden
        .head_top
          height 50px
          position relative
          padding 0 10px
          border-bottom 1px solid #f3f3f3
          background #fff
          color #333
          text-align center
          .head_con
            display block
            color #333
            border-bottom 2px solid #f3f4f5
            box-sizing border-box
            width 100%
            height 100%
            line-height 50px
            text-align center
            .a
              display block
              width 22px
              height 20px
              position absolute
              margin-top 16px
              text-decoration none
              background url(./1.png) no-repeat
              background-size contain
            .text
              width 90%
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
              display block
              margin 0 auto
              font-size 18px
              color #333
            .text1
              background url(./2.png) no-repeat
              background-size contain
              height 18px
              width 20px
              position absolute
              top 0
              right 10px
              cursor pointer
              margin-top 16px



        .mask_content
          width 100%
          .cont_top
            width 100%
            height 54px
            padding 10px
            box-sizing border-box
            font-size 10px
            background #f3f5f7
            a
              width 33.33%
              height 34px
              display block
              float left
              color #333
              text-decoration none
              box-sizing border-box
              padding 0 10px
              line-height 34px
              .s1
                box-sizing border-box
                width 100%
                height 34px
                background #f00
                color #fff
                border-radius 5px
                font-size 15px
                display block
                padding 0 5px
                text-align center
              span
                box-sizing border-box
                width 100%
                height 34px
                background #b9b9b9
                color #fff
                border-radius 5px
                font-size 15px
                display block
                padding 0 5px
                text-align center


          .city
            width 100%
            height 43px
            .city1
              width 100%
              height 100%
              box-sizing border-box
              padding 10px
              border-bottom 1px solid #e7e7e7
              background #ffe6d9
              font-size 14px
              span
                font-size 14px
                line-height 1.6


</style>
