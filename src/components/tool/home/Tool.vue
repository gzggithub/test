<template>
  <!--福居网 工具 首页-->
  <div>
    <!--header start-->

      <mt-header fixed title="福居网工具"></mt-header>

    <!--header end-->
    <!--section start-->

      <mt-swipe :auto="4000" @change="handleChange">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>

    <!--section end-->

  </div>
</template>

<script>
  import { Header, Swipe, SwipeItem } from 'mint-ui'
  export default{
    data () {
      return {
      }
    },
    components: {
      mtHeader: Header,
      mtSwipe: Swipe,
      mtSwipeItem: SwipeItem
    },
    methods: {
      handleChange (index) {}
    }
  }
</script>

<style>

</style>
