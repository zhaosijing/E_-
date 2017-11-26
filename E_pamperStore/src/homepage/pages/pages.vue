<template>
  <div class="homes">
    <scroller>
      <div class="homes_content">
        <!--轮播图-->
        <div class="slide_show">
          <mt-swipe :show-indicators="true">
            <mt-swipe-item v-for="(sItem,index) in firstPage.banners">
              <img :src="sItem.url" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <split></split>
        <!--专栏-->
        <div class="column_nav">
          <ul>
            <li v-for="(entryNav,index) in firstPage.entryNavs">
              <a href=""><img :src="entryNav.image" alt=""></a>
            </li>
          </ul>
        </div>
        <!--每日限购-->
        <split></split>
        <div class="daily_rushed">
          <div class="time_limit">
            <div class="f1 day">
              <img src="./suprice.png" alt="">
            </div>
            <div class="f1 text_end">距本场结束</div>
            <div class="f1 time">
              <span>00</span>:<span>00</span>:<span>00</span></div>
            <div class="f1 more">
              <a href="#"><img src="./more.png" alt=""></a>
            </div>
          </div>
          <div class="commodity" ref="commodity">
            <ul class="shop_div">
              <li class="shop" v-for="(Sale,index) in firstPage.daySale">
                <a href="#">
                  <div class="shop_d1"><img :src="Sale.image" alt=""></div>
                  <div>￥{{Sale.sale_price}}</div>
                  <p>省￥{{Sale.little_price}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!--热门栏目-->
        <split></split>
        <div class="weekly">
          <div class="p21">
            <img src="./24.jpg" alt="">
          </div>
          <div class="weekly21">
            <div class="weekly1" v-if="firstPage.hotPlates">
              <a href="#"><img :src="firstPage.hotPlates.leftSide.image" alt=""></a>
            </div>
            <div class="weekly2" v-if="firstPage.hotPlates">
              <a href="#"><img :src="firstPage.hotPlates.right_up.image" alt=""></a>
              <a href="#"><img :src="firstPage.hotPlates.right_down.image" alt=""></a>
            </div>
          </div>
        </div>
        <!--潮品视频-->
        <split></split>
        <div class="p2">
          <img src="./21.png" alt="">
        </div>
        <div class="night">
          <a href="#" v-if="firstPage.video">
            <div class="night1"><img :src="firstPage.video.link" alt=""></div>
            <div class="night2">
              <div class="title">{{firstPage.video.title}}</div>
              <div class="time"><span class="view"></span><i>12036</i><span class="t1">|</span>{{firstPage.video.time}}</div>
            </div>
          </a>
        </div>
        <!--体验馆-->
        <split></split>
        <div class="p2">
          <img src="./22.png" alt="">
        </div>
        <div class="exp">
          <a href="#" v-if="firstPage.video">
            <div class="exp1"><img :src="firstPage.experience.image" alt=""></div>
          </a>
        </div>
        <!--品牌特卖-->
        <split></split>
        <div class="sale">
          <div class="sale1">
            <img src="./23.png" alt="">
          </div>
          <ul class="sale2">
            <li class="sale3" v-for="(brand,index) in firstPage.brandSale">
              <div class="sale4">
                <span class="s1">{{brand.title}}</span><span class="s2">{{brand.sub_title}} </span>
              </div>
              <div class="sale5">
                <a href="#"><img :src="brand.image" alt=""></a>
              </div>
            </li>
          </ul>
        </div>
        <!--口碑评价-->
        <split></split>
        <div class="public">
          <div class="praise">
            <div class="praise1">
              <a href="#"><img src="./25.png" alt=""></a>
            </div>
            <div class="praise2">
              <a href="#">好评率99.64%</a>
            </div>
          </div>
          <div class="appraise">
            <ul>
              <li v-for="(comment,index) in firstPage.comments">
                <div class="list_ul">
                  <div class="div26"><img :src="comment.image" alt=""><div class="d26">{{comment.join_time}}</div></div>
                  <div class="zoology">
                    <span class="zoology1">{{comment.username}}</span><span class="zoology2">{{comment.pet_des}}</span>
                  </div>
                  <div class="character">
                    <p>
                      {{comment.comment_content}}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <split></split>
        <div class="footer">
          <div class="ft1">
            <span>触屏版</span><span><a href="#">手机客户端</a></span><span><a href="#">关于我们</a></span><span><a href="#">联系我们</a></span>
          </div>
          <div class="fb1">© wap.epet.com 版权：重庆易宠科技有限公司</div>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
  import split from '../../components/split/split.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default{
    mounted(){
      this.$store.dispatch('getFirstPage',()=>{
        this.$nextTick(()=>{
          console.log(this.firstPage)
          new BScroll(this.$refs.commodity, {
            click: true, //分发点击事件
            scrollX: true
          })
        })
      })

    },
    computed :{
      ...mapState(['firstPage'])
    },
    components:{
      split,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .homes
    display flex
    align-items center
    max-width 640px
    margin auto
    height 100%
    position relative
    overflow hidden
    .homes_content
      width 100%
      padding-top 86px

      .slide_show
        align-items center
        width 100%
        height 160px
        background rgba(66,66,66,.2)
        img
          width 100%
          height 100%
      .column_nav
        width 100%
        height 175px
        margin-bottom 10px
        ul
          list-style none
          li
            width 25%
            float left
            img
              width 100%
              height 100%
      .daily_rushed
        width 100%
        height 190px
        background white
        .time_limit
          width 100%
          height 40px
          position relative
          padding-top 10px
          overflow hidden
          .f1
            float left
          .day
            width 85px
            height 24px
            margin-left 10px
            img
              width 100%
              height 100%
              margin-left -20px

          .text_end
            margin-top 1px 0 0 10px
            font-size 13px
          .time
            margin-left 5px
            text-align center
            font-size 12px
            span
              width 21px
              height 21px
              border 1px solid #999
              padding 1px
              margin 6px 0


          .more
            position absolute
            top 2px
            right 8px
            width 135px
            height 40px
            a
              display block
              text-align right
              img
                width 50%




        .commodity
          width 100%
          height 130px
          padding-left 5px
          margin-bottom 10px
          position relative
          overflow hidden
          z-index 1
          .shop_div
            width 140%
            display flex
            align-items center
            white-space nowrap
            list-style none
            position absolute
            bottom 0
            .shop
              display inline-block
              float left
              list-style none
              text-align center
              width 98px
              height 100%
              margin-left 10px
              a
                display block
                .shop_d1
                  width 84px
                  height 84px
                  img
                    width 84px
                    height 84px

      .weekly
        width 100%
        height 230px
        background white
        .p21
          width 100%
          height 40px
          img
            width 50%
            margin 0 25%
        .weekly21
          box-sizing border-box
          width 100%
          height 190px
          border-top 1px solid #e7e7e7
          position relative
          .weekly1
            width 42.53%
            height 100%
            a
              width 100%
              height 100%
              text-decoration none
              display block
              img
                width 100%
                height 100%
                display block
                vertical-align middle
          .weekly2
            box-sizing border-box
            width 57.33%
            height 100%
            position absolute
            top 0
            right 0
            a
              width 100%
              height 50%
              text-decoration none
              display block
              img
                width 100%
                height 100%
                display block
                border-bottom 1px solid #e7e7e7
                border-right 1px solid #e7e7e7
                vertical-align middle
      .p2
        width 100%
        height 62px
        img
          width 50%
          margin 0 25%
      .night
        width 100%
        height 268px
        a
         width 100%
         height 210px
         box-sizing border-box
         color #333
         display block
         text-decoration none
         .night1
          width 100%
          height 210px
          position relative
          overflow hidden
          img
            width 100%
            height 100%
            display block
            vertical-align middle

         .night2
          width 100%
          height 58px
          color #999
          font-size 12px
          padding 10px
          text-align center
          box-sizing border-box
          .title
            width 100%
            height 19px
            color #333
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
          .time
            width 100%
            height 19px
            color #999
            font-size 12px
            text-align center
            .view
              background url(./view-black.png) no-repeat
              display inline-block
              width 10px
              height 9px
              background-size contain
              margin-right 3px
            i
              font-style normal
              color #999
              font-size 12px
              text-align center
            .t1
              margin 0 10px
              color #999
              font-size 12px
              text-align center
      .exp
        width 100%
        height 155px
        text-align center
        background #fff
        a
          display block
          cursor pointer
          color #333
          text-decoration: none
          img
            width 100%
            display block
            vertical-align middle

      .brand
        width 100%
        ul
          width 100%
          li
            width 100%
            height 260px
            .p3
              width 100%
              height 62px
              img
                width 50%
                margin 0 25%
            .brand5
              width 100%
              height 197px
              .brand1
                width 100%
                height 44px
                padding 10px
                display block
                font-size 14px
                box-sizing border-box
                .brand3
                  width 60px
                  height 20px
                  font-size 15px
                  line-height contain
                .brand4
                  width 43px
                  height 16px
                  color #999
                  font-size 12px
                  margin-left 5px
              .brand2
                width 100%
                height 155px
                background url(./default-epet.png) no-repeat
                background-size: 120px auto
                padding-top 41%
                box-sizing border-box
                img
                  width 100%
                  height 155px
      .sale
        width 100%
        .sale1
          width 100%
          height 62px
          img
            width 50%
            margin 0 25%

        .sale2
          width 100%
          .sale3
            width 100%
            height 197px
            .sale4
              width 100%
              height 44px
              padding 10px
              box-sizing border-box
              .s1
                width 53px
                height 20px
                font-size 15px
              .s2
                width 165px
                height 16px
                color #999
                font-size 12px
                margin-left 5px
            .sale5
              width 100%
              height 135px
              overflow hidden
              position relative
              padding-top 41%
              box-sizing border-box
              img
                width 100%
                height 100%
                position absolute
                top 0
                left 0

      .public
        width 100%
        height 585px
        background white
        .praise
          width 100%
          position relative
          text-align center
          img
            height 45px
            width auto
            margin 0 auto
            display block
          .praise2
            position absolute
            top 14px
            right 4px
            color #999
            font-size 12px


        .appraise
          box-sizing border-box
          width 100%
          height 100%
          padding 5px
          ul
            box-sizing border-box
            display block
            list-style none
            width 100%
            height 100%
            li
              box-sizing border-box
              display block
              list-style none
              width 50%
              height 264px
              float left
              padding 5px
              .list_ul
                width 100%
                height 100%
                background #f3f5f7
                .div26
                  overflow hidden
                  height 150px
                  position relative
                  img
                    position absolute
                    top 0
                    left 0
                    width 100%
                    display block
                  .d26
                    position absolute
                    bottom 0
                    left 0
                    width 100%
                    height 19px
                    background rgba(0,0,0,.4)
                    text-overflow ellipsis
                    white-space nowrap
                    overflow hidden
                    color #fff
                    font-size 12px
                    line-height 19px
                    text-align center
                .zoology
                  height 19px
                  font-size 12px
                  padding 0 5px
                  margin-top 5px
                  .zoology1
                    float left
                  .zoology2
                    float right
                    background #ddd
                    border-radius 5px
                    padding 0 5px
                    font-size 12px
                .character
                  height 60px
                  overflow hidden
                  color #999
                  font-size 13px
                  margin-top 5px
                  margin-right 5px
                  box-sizing border-box
                  line-height: 1.5;
                  p
                    box-sizing border-box
                    width 100%
                    height 60px
                    font-size 13px
                    margin 5px


      .footer
        width 100%
        height 86px
        display block
        background #fff
        clear both
        .ft1
          font-size 14px
          padding 15px 0 5px
          text-align center
          span
            padding-right 15px
            color red
            a
              color #333
              text-decoration none
        .fb1
          width 100%
          height 44px
          box-sizing border-box
          text-align center
          margin 10px 0
          padding-bottom 25px
          font-size 12px
</style>
