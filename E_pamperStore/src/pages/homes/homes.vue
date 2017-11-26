<template>
  <div>
    <e-header></e-header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import split from '../../components/split/split.vue'
  import BScroll from 'better-scroll'
  import header from '../../components/header/header.vue'
  export default{
    components:{
      "e-header":header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content
    width 100%
    height 635px
</style>
