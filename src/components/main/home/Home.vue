<template>
  <!--福居网 首页 主页-->
  <div>
    <div class="header">
      <m-header></m-header>
    </div>
    <div class="main">
      <m-section></m-section>
    </div>
    <div class="footer">
      <m-footer></m-footer>
    </div>
  </div>
</template>

<script>
  import Header from './MainHeader'
  import Section from './MainSection'
  import Footer from './MainFooter'
  import { Swipe, SwipeItem } from 'mint-ui'
  export default{
    components: {
      mHeader: Header,
      mSection: Section,
      mFooter: Footer,
      mtSwipe: Swipe,
      mtSwipeItem: SwipeItem
    }
  }
</script>

<style lang="less">
  @import "../../../style/home.less";
  .main {
    height: 750px;
    background-color: rgb(239,239,239);
  }
</style>
