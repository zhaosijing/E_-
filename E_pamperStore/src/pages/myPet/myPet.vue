<template>
  <div class="Login">
    <div class="header">
      <div class="login_bg">
        <div class="head-top">
          <a class="aback" onclick="history.go(-1)"></a>
          <div class="zfont ">
            <a class="afff" @click="RegShow">注册</a>
          </div>
        </div>
        <div class="logo">
          <img src="./logo.png" alt="">
        </div>
        <div class="title">
          <ul class="login">
            <li class="selectTag4">
              <a @click="toggleShow(true)">普通登录</a>
              <i v-if="isShow"></i>
            </li>
            <li class="selectTag4">
              <a @click="toggleShow(false)" >手机动态密码登录</a>
              <i class="icon" v-if="ShowNow"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bgfff">
      <div class="mformBox">
        <div class="Content"  v-if="isShow">
          <form  action="#" id="login_form" method="post">
            <div class="Content4">
              <ul class="mform">
                <li>
                  <span class="mNameIco"></span>
                  <input type="text" placeholder="手机号/邮箱/用户名"  class="text" name="username" id="username">
                </li>
                <li>
                  <span class="mpasswordIco"></span>
                  <input type="password" placeholder="输入密码" class="text" name="password" id="password">
                </li>
              </ul>
              <div class="ftc">
                <a>忘记密码?</a>
              </div>
              <div class="btn">
                <a>登录</a>
              </div>
              <div style="height: 150px"></div>
              <div class="other_login">
                <div class="partners">
                  <b>合作网站登录</b>
                </div>
                <ul class="uList1">
                  <li >
                    <a>
                      <img src="./login_ico4.png" alt="">
                    </a>
                  </li>
                  <li >
                    <a>
                      <img src="./login_ico2.png" alt="">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <div class="Content" v-else>
          <form action="#" id="New_login">
            <div class="Content4">
              <ul class="mform">
                <li>
                  <span class="mNumIco"></span>
                  <input type="text" placeholder="已注册的手机号"  v-model="phone" class="dttext">
                </li>
                <li>
                  <span class="mpasswordIco"></span>
                  <input type="text" placeholder="请输入验证码" class="yanzhengma_input" @blur="checkLpicma" v-model="picLyanzhengma">
                  <input type="button" id="code" @click="createCode" class="verification1" v-model="checkCode"/> <br>
                </li>
                <li>
                  <span class="mpasswordIco"></span>
                  <input class="dttext" type="password" v-model="code"  placeholder="动态密码">
                  <a class="getMsg">
                    获取动态密码
                  </a>
                </li>
              </ul>
            </div>
          </form>
          <div class="ftc">
            <a>忘记密码?</a>
          </div>
          <div class="btn">
            <a>登录</a>
          </div>
          <div style="height: 80px"></div>
          <div class="other_login">
            <div class="partners">
              <b>合作网站登录</b>
            </div>
            <ul class="uList1">
              <li >
                <a>
                  <img src="./login_ico2.png" alt="">
                </a>
              </li>
              <li >
                <a>
                  <img src="./login_ico4.png" alt="">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <transition name="move">
      <div class="Reg_wrap" v-if="Reg">
        <div class="showAddUser">
          <form action="#" id="regaddform">
            <ul class="Reg_user">
              <li>
                <span class="mNumIco"></span>
                <input type="text" placeholder="..." class="nexttext"  v-model="phone">
              </li>
              <li>
                <span class="seccodeIco"></span>
                <input type="text" placeholder="请输入验证码" class="yanzhengma_input" @blur="checkLpicma" v-model="picLyanzhengma">
                <input type="button" id="code1" @click="createCode" class="verification1" v-model="checkCode"/> <br>
              </li>
              <li>
                <span class="mEmailIco"></span>
                <input type="text" placeholder="验证码" class="nexttext" v-model="code" id="message">
                <a v-show="show" class="msg" @click="sendCode" >
                  <span @click="getCode">获取短信验证码</span></a>
                <a v-show="!show" class="count">{{count}} s</a>
              </li>
              <li>
                <span class="mNameIco"></span>
                <input type="text" placeholder="你的昵称/用户名" class="nexttext"  id="phone">
              </li>
              <li>
                <span class="mpasswordIco"></span>
                <input type="password" placeholder="输入密码" class="nexttext"  id="phone">
              </li>
              <li>
                <span class="mpasswordIco"></span>
                <input type="password" placeholder="确认密码" class="nexttext"  id="phone">
              </li>
            </ul>
            <div class="bottom">
              <a class="btn-login " @click="login">下一步</a>
            </div>
          </form>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="register_wrap" v-if="register">
        <div class="register">
          <form action="#" class="reg">
            <ul class="mform ">
              <li>
                <span class="mNumIco"></span>
                <input type="text" v-on:blur="nextPage($event)" placeholder="请输入手机号码" class="nexttext" v-model="phone" id="phone1">
              </li>
            </ul>
            <div class="bottom">
              <a  ref="btn" class="btn-login"  >下一步</a>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import $ from 'jquery'
  import axios from 'axios'
  import{MessageBox} from 'mint-ui'
  var code ;
  export default{
    data(){
      return{
        checkCode:'',
        picLyanzhengma:'',
        show: true,
        count: '',
        timer: null,
        isShow:true,
        register:false,
        ShowNow:false,
        Reg:false,
        phone:'',
        code:''
      }
    },
    methods:{
      //      创建图片
      createCode(){
        code = "";
        var codeLength = 4;//验证码的长度
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
          'S','T','U','V','W','X','Y','Z');//随机数
        for(var i = 0; i < codeLength; i++) {//循环操作
          var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
          code += random[index];//根据索引取得随机数加到code上
        }
        this.checkCode = code;//把code值赋给验证码
      },
      // 失焦验证图和密码
      checkLpicma(){

        this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写
        if(this.picLyanzhengma == '') {
          $(".login_content1 span:eq(2)").text("请输入验证码")
          $(".login_content1 span:eq(2)").removeClass("disappear");

        }else if(this.picLyanzhengma.toUpperCase() != this.checkCode ) { //若输入的验证码与产生的验证码不一致时
          console.log( this.picLyanzhengma.toUpperCase())
          console.log(code)
          $(".login_content1 span:eq(2)").text("验证码不正确")
          $(".login_content1 span:eq(2)").removeClass("disappear");
          this.createCode();//刷新验证码
          this.picLyanzhengma = '';
        }else { //输入正确时
          $(".login_content1 span:eq(2)").addClass("disappear");
          $(".login_content1 span:eq(2)").text("请输入验证码")
          return true;

        }

      },
      //      倒计时
      getCode(){
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      },
//      注册手机号验证
      nextPage(event){
        const phone=event.target.value
        let regNum = /^1[3|4|5|8|7][0-9]\d{1,8}$/
        if(! regNum.test(phone)){
          MessageBox.alert('亲，请给人家正确的电话号码').then(action => {})
        }else {
          console.log(phone);
          this.Reg=!this.Reg
        }
      },

      toggleShow(data){
        this.isShow=data
      },
      RegShow(){
        this.register=!this.register
      },

      //      发送短信验证码
      sendCode () {
        const url = `/sendcode?phone=${this.phone}`
        axios.get(url).then(response => {
          alert(response.data.code) // 0
        })
      },
      //     提交验证码
      login () {
        axios.post('/login', {phone: this.phone, code: this.code}).then(response => {
          console.log('login result ', response.data)
          const result = response.data
          if (result.code == 0) {
            const user = result.data
            alert(`登陆成功~ 你即将进入首页`)

          } else {
            alert(`登陆失败, 请输入正确的手机号和验证码`)
          }
        })
      }

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .Login
    .header
      width 375px
      height 175px

      .login_bg
        width 100%
        height 100%
        background url(./1.png) no-repeat
        background-size 100% 100%;
        .head-top
          height 50px
          line-height 50px
          position relative
          padding 0 1em

          .aback
            background url(./3.png) no-repeat
            background-size 12px 17px
            display block
            width 22px
            height 20px
            position absolute
            top 0
            left 12px
            margin-top 16px
          .zfont
            position absolute
            right 10px
            top 0
            a
              color #fff
        .logo
          width 100%
          height 84px
          text-align center
          img
            display block
            width 76px
            height 47px
            margin-left 160px


        .title
          background-color rgba(255,255,255,0.3)
          height 44px
          .login
            li
              float left
              width 50%
              height 44px
              text-align center
              line-height 44px
              a
                font-size 15px
                color #fff
                display block
              i
                display block
                width: 0
                height: 0
                border-left 10px solid transparent
                border-right 10px solid transparent
                border-bottom 10px solid #fff
                position absolute
                top:165px
                left -181px
                right 0
                margin auto
              .icon
                display block
                width: 0
                height: 0
                border-left 10px solid transparent
                border-right 10px solid transparent
                border-bottom 10px solid #fff
                position absolute
                top:165px
                right -356px
                margin auto
    .bgfff
      height 409px
      .mformBox
        width 345px
        height 82px
        background: #fff;
        border-radius: 0.5em;
        margin: 0 4% 1em 4%;
        padding: 0 1.6%;
        .Content
          width 333px
          height 92px
          .Content4
            width 100%
            height 100%
            .mform
              padding-bottom 10px
              li
                padding 12px 0 12px 30px
                border-bottom #e2e2e2 solid 1px
                position relative
                .mNumIco
                  float left
                  display inline
                  background url(./ico3.png)
                  background-size contain
                  width 17px
                  height 21px
                  margin 1px 0 0 -25px
                .mNameIco
                  float left
                  display inline
                  background url(./ico4.png)
                  background-size contain
                  width 17px
                  height 21px
                  margin 1px 0 0 -25px
                input
                  display block
                  height 21px
                  width 100%
                  font-size 15px
                  border none
                  padding 0
                  outline none
                  background-color #fff
                .mpasswordIco
                  float left;
                  display inline;
                  width 17px;
                  height 20px;
                  margin 0 0 0 -25px;
                  background url(./ico4.png) no-repeat
                  background-size contain
                .verification1
                  display inline-block
                  width 80px
                  position absolute
                  top:20px
                  right 0
                  font-size 18px
                  letter-spacing 3px
                  color #053d84
                  background #f2f2f5
                  padding 5px 0 5px 10px
                  height 30px
                  border 1px solid #e6e6e6
                  vertical-align middle
                .imgCon
                  display block
                  position absolute
                  top: 13px
                  right -4px
                .getMsg
                  display block
                  width 100px
                  height 29px
                  background #fff
                  color #ff4259
                  border 1px solid #eb4c33
                  position absolute
                  right 0
                  top 5px
                  border-radius 3px
                  text-align center
                  line-height 29px
                  font-size 12px
                  box-sizing border-box

      .ftc
        padding-left 2em
        text-align center
        a
          color #898989
          font-size 15px
          float right
          display block
          width 70px
          height 20px
          line-height 20px
      .btn
        width 100%
        height 34px
        padding 25px 0
        text-align center
        line-height 44px
        a
          display block
          background: #2ec975
          font-size 15px
          border-radius 5px
          color white
          letter-spacing 5px
          margin 0 5px
      .other_login
        width 100%
        height 113px
        .partners
          color #d7d7d7
          height 20px
          text-align center

        .uList1
          padding 10px 0
          li
            float left
            width 33.33%
            height 57px
            padding-left 30px
            margin-top: 12px
            box-sizing border-box
            img
              width 57px
              height 57px
    .Reg_wrap
      position fixed
      top:0
      left:0;
      right 0
      bottom:0
      z-index:100
      background: white
      &.move-enter-active, &.move-leave-active
        transition transform .5s
      &.move-enter, &.move-leave-to
        transform translateY(100%)
      .showAddUser
        width 100%
        height 365px
        .Reg_user
          width 100%
          height 100%
          margin-left 10px
          li
            border-bottom: #e2e2e2 solid 1px;
            padding: 15px 0 10px 30px;
            position: relative
            &>input:-webkit-input-placeholder
              color  white
            .mNumIco,.seccodeIco,.mEmailIco,.mNameIco,.mpasswordIco
              float left
              display inline
              width 17px
              height 17px
              background url(./ico4.png) no-repeat
              background-size contain
              margin 2px 0 0 -25px
            .seccodeIco
              background url(./ico1.png) no-repeat
              background-size contain
            .IMgcode
              position absolute
              right 20px
              top: 10px
            .mEmailIco
              background url(./ico2.png) no-repeat
              background-size contain
            .msg
              width 126px
              margin-right 10px
              border-radius 30px
              text-align center
              padding 6px 0
              display block
              position absolute
              top: 10px
              right 0
              background: #fed171
              color white
              font-size 14px
            .count
              width 126px
              margin-right 10px
              border-radius 30px
              text-align center
              padding 6px 0
              display block
              position absolute
              top: 10px
              right 0
              background: gray
              color white
              font-size 14px
            .mNameIco
              background url(./ico3.png) no-repeat
              background-size contain
            .mpasswordIco
              background url(./ico2.png) no-repeat
              background-size contain
            input
              display block
              height 21px
              width 100%
              font-size 13px
              border none
              padding 0
              color #b8b8b8
              outline none
            .verification1
              display inline-block
              width 80px
              position absolute
              top:20px
              right 20px
              font-size 18px
              letter-spacing 3px
              color #053d84
              background #f2f2f5
              padding 5px 0 5px 10px
              height 36px
              border 1px solid #e6e6e6

        .bottom
          width 100%
          height 48px
          margin-top 2em
          text-align center
          .btn-login
            width 300px
            height 30px
            line-height 20px
            background #d7d7d7
            color #fff
            display: block;
            margin: 0 10%;
            border-radius: 30px;
            font-size: 15px;
            padding: 5px 0;
            text-align: center;
            vertical-align middle



    .register_wrap
      position fixed
      top 0
      left 0
      right 0
      bottom 0
      z-index 2
      background #fff
      &.fade-enter-active, &.fade-leave-active
        transition opacity .3s
      &.fade-enter, &.fade-leave-to
        opacity 0
      .register
        width 100%
        height 122px
        .reg
          height 50px
          width 363px
          margin-left 10px
          .mform
            padding-bottom 10px
            &>li
              border-bottom: #e2e2e2 solid 1px;
              padding: 1.2em 0 1.2em 30px;
              position: relative
              .mNumIco
                float left
                display inline
                width 17px
                height 17px
                background url(./ico1.png) no-repeat
                background-size contain
                margin 2px 0 0 -25px
              input
                display block
                height 21px
                width 100%
                font-size 13px
                border none
                padding 0
                color #b8b8b8

        .bottom
          width 100%
          height 48px
          margin-top 2em
          text-align center
          .btn-login
            width 300px
            height 30px
            line-height 20px
            background #d7d7d7
            color #fff
            display: block;
            margin: 0 10%;
            border-radius: 30px;
            font-size: 15px;
            padding: 5px 0;
            text-align: center;
            vertical-align middle


</style>
