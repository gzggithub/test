<template>
  <div>
    <!--轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../../assets/house1.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../../assets/house1.png" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../../assets/house1.png" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  export default{
    components: {
      mtSwipe: Swipe,
      mtSwipeItem: SwipeItem
    }
  }
</script>

<style lang="less">

</style>
