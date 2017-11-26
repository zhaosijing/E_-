<template>
  <div class="pet">
    <div class="header">
      <div class="logo">
        <div class="register">
          <a href="#" class="a" onclick="history.go(-1)"></a>
          <div class="header1"  @click="registerReg"><a>注册</a></div>
        </div>
        <div class="logo1"><img src="./logo.png" alt=""></div>
        <div class="fair">
          <ul class="fair1">
            <li class="fair2" @click="totrendsShow">
              <a style="color: white">普通登录</a>
            </li>
            <li class="fair2" @click="totrendsShow">
              <a style="color: white">手机动态密码登录</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="trends">
      <div class="fair_div">
        <div>
          <div class="fair_div1">
            <div class="fair_d1">
              <form method="post" v-show="!isShow">
                <div>
                  <ul class="fair_d2">
                    <li>
                      <span class="fair1"></span><input class="text" type="text" placeholder="手机号/邮箱/用户名">
                    </li>
                    <li>
                      <span class="fair2"></span><input class="text" type="text" placeholder="输入密码">
                    </li>
                  </ul>
                </div>
              </form>
              <form method="post" v-show="isShow">
                <div class="post">
                  <ul class="fair_d2">
                    <li>
                      <span class="fair1"></span>
                      <input class="text" type="text" placeholder="已注册的手机号">
                    </li>
                    <li>
                      <span class="fair2"></span>
                      <input class="text" type="text" placeholder="请输入图片内容">
                      <span class="fair3"><img src="./seccode.png" alt=""></span>
                    </li>
                    <li>
                      <span class="fair2"></span>
                      <input class="text" type="text" placeholder="动态密码">
                      <a href="#" class="fair4">获取动态密码</a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="fair_div2">
          <a href="#">忘记密码？</a>
        </div>
        <div class="fair_div3">
          <a href="#">登 录</a>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="ft"><b>合作网站登录</b></div>
      <ul class="ulList">
        <li><a href="#"><img src="./login_ico2.png" alt=""></a></li>
        <li><a href="#"><img src="./login_ico4.png" alt=""></a></li>
      </ul>
    </div>
    <div class="reg" v-show="isReg">
      <div class="reg1">
        <form class="form">
          <ul class="m1">
            <li>
              <span class="sp"></span>
              <input class="text" type="text" placeholder="请输入手机号码">
            </li>
          </ul>
          <div class="from1"@clivk="registraForm">
            <a class="from2">下一步</a>
          </div>
        </form>
      </div>
    </div>
    <div class="fm1" v-show="!isForm">
      <form action="" class="fm">
        <ul class="fm_m1">
          <li>
            <span class="s1"></span>
            <input class="inp1" type="text" placeholder="请输入手机号码">
          </li>
          <li>
            <span class="s2"></span>
            <input class="inp2" type="text" placeholder="图片验证码">
            <img class="img" src="./seccode1.png" alt="">
          </li>
          <li>
            <span class="s3"></span>
            <input class="inp3" type="text" placeholder="验证码">
            <a class="a" href="#">获取短信验证码</a>
          </li>
          <li>
            <span class="s4"></span>
            <input class="inp4" type="text" placeholder="你的昵称/用户名">
          </li>
          <li>
            <span class="s5"></span>
            <input class="inp5" type="text" placeholder="请设置密码">
          </li>
          <li>
            <span class="s6"></span>
            <input class="inp6" type="text" placeholder="请确认密码">
          </li>
        </ul>
        <div class="next" @clivk="registraForm">
          <a class="next2" onclick="history.go(-1)">下一步</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        isShow:false,
        isReg:false,
        isForm:false
      }
    },
    methods:{
      totrendsShow(){
        this.isShow = !this.isShow
      },
      registerReg(){
        this.isReg = !this.isReg
      },
      registraForm(){
        this.isForm = !this.isForm
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .pet
    width 100%
    height 620px
    position relative
    padding-bottom 86px
    background #fff
    overflow hidden
    .header
      width 100%
      height 177px
      line-height 20px
      box-sizing border-box
      background url(./1.png) no-repeat
      background-size 100% 100%
      .logo
        box-sizing border-box
        display block
        .register
          width 100%
          height 50px
          position relative
          padding 0 10px
          text-align center
          box-sizing border-box
          .a
            background url("./3.png") no-repeat
            background-size contain
            display block
            width 22px
            height 20px
            position absolute
            margin-top 16px
            color #fff
            text-decoration none
          .header1
            width 40px
            height 21px
            position absolute
            top 20px
            right 10px
            a
              display block
              font-size 16px
              box-sizing border-box
              color #fff


        .logo1
          width 100%
          height 84px
          padding 8px 0 16px 0
          box-sizing border-box
          img
            display block
            margin auto
            width 20%
            vertical-align middle
        .fair
          width 100%
          height 44px
          background rgba(255,255,255,.3)
          box-sizing border-box
          .fair1
            width 100%
            height 44px
            list-style none
            box-sizing border-box
            .fair2
              float left
              width 50%
              text-align center
              height 44px
              line-height 44px
              position relative
              list-style none
              color #fff
    .trends
      width 100%
      height 445px
      .fair_div
        box-sizing border-box
        width 100%
        height 100%
        background #fff
        position relative
        .fair_div1
          box-sizing border-box
          border-radius 5px
          margin 0 4% 10px 4%
          padding 0 1.6%
          .fair_d1
            box-sizing border-box
            width 333px
            height 92px
            .fair_d2
              width 100%
              height 100%
              list-style none
              li
                border-bottom #e2e2e2 solid 1px
                padding 12px 0 12px 30px
                position relative
                list-style none
                .fair1
                  float left
                  direction inherit
                  width 17px
                  height 21px
                  background url(./ico3.png) no-repeat
                  background-size contain
                  margin 1px 0 0 -25px
                .text
                  display block
                  height 21px
                  width 100%
                  font-size 15px
                  color #f3f5f7
                  font-family "Microsoft Yahei",tahoma,arial
                  outline none
                .fair2
                  float left
                  direction inherit
                  width 17px
                  height 21px
                  background url(./ico4.png) no-repeat
                  background-size contain
                  margin 1px 0 0 -25px
                .fair3
                  width 85px
                  height 30px
                  display block
                  position absolute
                  top 5px
                  right 0
                  direction inherit
                  img
                    width 100%
                    height 100%
                .fair4
                  background #fff
                  color #ff4259
                  border 1px solid #eb4c33
                  position absolute
                  right 0
                  top 5px
                  border-radius 3px
                  width 100px
                  text-align center
                  padding 8px 0
                  font-size 12px
        .fair_div2
          width 100%
          height 20px
          position 0 20px
          a
            color #898989
            font-size 14px
            float right
            margin-right 20px
            text-decoration none
            line-height 20px
        .fair_div3
          width 100%
          height 44px
          padding 0 20px
          margin-top 10px
          text-align center
          display block
          box-sizing border-box
          a
            width 100%
            display block
            border-radius 5px
            background #2ec975
            font-size 15px
            padding 10px 0
            text-align center
            text-decoration none
            color #fff


    .footer
      width 100%
      height 113px
      display block
      position fixed
      bottom 46px
      .ft
        width 100%
        height 28px
        color #d7d7d7
        margin-top 5px
        font-size 16px
        text-align center
        b
          font-weight normal

      .ulList
        box-sizing border-box
        width 100%
        height 93px
        padding 15px 0
        list-style none
        display block
        li
          width 15%
          height 57px
          padding 0 20px
          float left
          display inline
          list-style none
          a
            display block
            text-decoration none
            width 100%
            height 100%
            img
              height 100%

    .reg
      display none
      width 100%
      height 667px
      position absolute
      top 0
      background #fff
      overflow hidden
      z-index 15
      .reg1
        width 100%
        height 123px
        .form
          display block
          font-family "Microsoft Yahei",tahoma,arial
          .m1
            width 100%
            height 50px
            margin-left 10px
            list-style none
            li
              width 100%
              height 100%
              border-bottom #e2e2e2 solid 1px
              padding 12px 0 12px 30px
              position relative
              list-style none
              box-sizing border-box
              font-weight normal
              vertical-align baseline
              font-size 13px
              line-height 21px
              color #e2e2e2
              .sp
                float left
                display inline
                width 17px
                height 17px
                background url(./ico1.png) no-repeat
                background-size contain
                margin 2px 0 0 -25px
                .text
                  display block
                  height 21px
                  width 100%
                  font-size 13px
                  line-height 21px
                  border none
                  padding 0
                  color #e2e2e2
                  -webkit-appearance none
                  border-radius 3px
                  outline none
          .from1
            width 100%
            height 48px
            margin-top 20px
            padding-top 15px
            text-align center
            box-sizing border-box
            a
              width 300px
              height 30px
              display block
              background #d7d7d7
              color #fff
              margin 0 10%
              border-radius 30px
              font-size 15px
              padding 5px 0
              text-align center
              text-decoration none
              box-sizing border-box
    .fm1
      display none
      position absolute
      top 0
      z-index 20px
      width 100%
      height 665px
      box-sizing border-box
      /*display block*/
      background #fff
      overflow hidden
      .fm
        width 100%
        height 365px
        box-sizing border-box
        display block
        .fm_m1
          width 100%
          height 304px
          box-sizing border-box
          display block
          margin-left 10px
          list-style none
          li
            width 100%
            height 50px
            border-bottom #e2e2e2 solid 1px
            padding 12px 0 12px 30px
            position relative
            list-style none
            box-sizing border-box
            span
              float left
              display inline
              width 17px
              height 17px
              box-sizing border-box
              margin 2px 0 0 -25px
              background-size contain
            input
              display block
              box-sizing border-box
              position relative
              height 21px
              width 100%
              font-size 13px
              border none
              color #b8b8b8
              border-radius 3px
            .img
              width 85px
              height 30px
              position absolute
              right 20px
              vertical-align middle
            .a
              width 126px
              height 28px
              margin-right 25px
              background #fed171
              position absolute
              top 7px
              right 0
              box-sizing border-box
              border-radius 30px
              text-align center
              padding 5px 0
              font-size 14px
              color #fff
            .s1
              background url(./ico1.png) no-repeat
              box-sizing border-box
              margin 2px 0 0 -25px
              background-size contain
            .s2
              background url(./ico5.png) no-repeat
              box-sizing border-box
              margin 2px 0 0 -25px
              background-size contain
            .s3
              background url(./ico2.png) no-repeat
              box-sizing border-box
              margin 2px 0 0 -25px
              background-size contain
            .s4
              background url(./ico3.png) no-repeat
              box-sizing border-box
              margin 2px 0 0 -25px
              background-size contain
            .s5
              background url(./ico4.png) no-repeat
              box-sizing border-box
              margin 2px 0 0 -25px
              background-size contain
            .s6
              background url(./ico4.png) no-repeat
              box-sizing border-box
              margin 2px 0 0 -25px
              background-size contain
            .inp1
              background-color #fff
              border none
              color: #b8b8b8
            .inp2
              width 50%
              display inline-block
              color: #b8b8b8
            .inp3
              padding-right 95px
              color: #b8b8b8



        .next
          width 100%
          height 48px
          margin-top 20px
          padding-top 15px
          text-align center
          box-sizing border-box
          .next2
            width 300px
            height 30px
            display block
            background #d7d7d7
            color #fff
            margin 0 10%
            border-radius 30px
            font-size 15px
            padding 5px 0
            text-align center
            text-decoration none
            box-sizing border-box
</style>
