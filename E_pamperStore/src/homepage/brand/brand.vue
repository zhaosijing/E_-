<template>
    <div class="brand">
      <scroller>
        <div class="recom" v-for="(item , index) in brand">
          <div class="title">
            <span class="con">—— {{item.title}} ——</span>
          </div>
          <div class="list">
            <ul class="listB">
              <li class="f1" v-for="(origin , index) in item.list">
                <a href="#">
                  <div class="img">
                    <img :src="origin.logo" alt="">
                  </div>
                  <div>
                    <img class="jian" :src="origin.logo" alt="">
                  </div>
                  <p class="name">{{origin.name}}</p>
                  <p class="address">{{origin.address}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </scroller>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  import split from '../../components/split/split.vue'
  export default{
    mounted(){
      this.$store.dispatch('getBrand')
      console.log(this.brand)
    },
    computed: {
      ...mapState(['brand'])
    },
    components:{
      split
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.brand
  position absolute
  top: 40px
  height 700px
  width 100%
  overflow hidden
  .recom
    width 100%
    height 562px
    padding-bottom 15px
    margin-bottom 10px
    box-sizing border-box
    .title
      width 375px
      height 39px
      padding-top 20px
      font-size 12px
      color #999
      text-align center
      .con
        display inline-block
        color #999
    .list
      width 100%
      height 508px
      box-sizing border-box
      padding 0 5px
      .listB
        width 100%
        height 100%
        .f1
          margin-top 20px
          padding 0 5px
          float left
          position relative
          width 33.33%
          height 107px
          box-sizing border-box
          list-style none
          a
            display block
            .img
              width 100%
              height 62px
              border 1px solid #e2e2e2
              text-align center
              padding 50px 10px 10px
              box-sizing border-box
              background url(./11.jpg) no-repeat center center #fff
              background-size 120px auto
              position relative
              img
                display block
                max-width 90%
                height 40px
                margin 10px 10px 0
                position absolute
                top: 0
                left: 0
            .jian
              width 13px
              height 13px
              position absolute
              top 0
              left 10px
            .name
              display block
              height: 20px
              font-size 13px
              margin-top 5px
              text-align center
              color #333
              white-space nowrap
            .address
              display block
              width 40px
              font-size 12px
              color #999
              text-align center
              margin-left 25px
</style>
