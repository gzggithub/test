<template>
  <div class="section">
    <!--轮播图 start-->
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
    <!--轮播图 end-->
    <!--列表 start-->
    <div class="list">
      <ul class="flex">
        <li class="flex-item">
          <router-link to="/TwoHouse">
            <div>
              <img src="../../../assets/second@2x.png" alt="">
            </div>
            <div>二手房</div>
          </router-link>
        </li>
        <li>
          <router-link to="/NewHouseList">
            <div>
              <img src="../../../assets/newhouse@2x.png" alt="">
            </div>
            <div>新房</div>
          </router-link>
        </li>
        <li>
          <router-link to="/renting">
            <div>
              <img src="../../../assets/rent@2x.png" alt="">
            </div>
            <div>租房</div>
          </router-link>
        </li>
        <li>
          <router-link to="/mapList">
            <div>
              <img src="../../../assets/mapfindhouse@2x.png" alt="">
            </div>
            <div>地图找房</div>
          </router-link>
        </li>
      </ul>
      <ul class="flex">
        <li class="flex-item">
          <router-link to="/ToolExamine">
            <div>
              <img src="../../../assets/chamendian@2x.png" alt="">
            </div>
            <div>查门店</div>
          </router-link>
        </li>
        <li>
          <router-link to="/CheckPlot">
            <div>
              <img src="../../../assets/zhaoxiaoqu@2x.png" alt="">
            </div>
            <div>找小区</div>
          </router-link>
        </li>
        <li>
          <router-link to="/schoolDis">
            <div>
              <img src="../../../assets/xuequfang@2x.png" alt="">
            </div>
            <div>学区房</div>
          </router-link>
        </li>
        <li>
          <router-link to="/Entrust">
            <div>
              <img src="../../../assets/zaixianweituo@2x.png" alt="">
            </div>
            <div>在线委托</div>
          </router-link>
        </li>
      </ul>
    </div>
    <!--列表 end-->
    <!--福居头条 start-->
    <div class="hot">
      <div class="hot-flex hot-left">
        <img src="../../../assets/hot-header.png" alt="">
      </div>
      <div class="hot-flex hot-right">

          <mt-swipe :auto="4000">
            <mt-swipe-item>

                <span class="border car-show">车展</span>
                <a href="">
                  <span class="car-house car-right">第五届呼市十一惠民车展与您相约</span>
                </a>

            </mt-swipe-item>
            <mt-swipe-item>

                <span class="border house-group">看房团</span>
                <a href="">
                  <span class="car-house house-right">金九银十购房季9月23日看房团</span>
                </a>

            </mt-swipe-item>
          </mt-swipe>

        </ul>
      </div>
    </div>
    <!--福居头条 end-->
    <!--福居百科 start-->
    <!--福居百科 end-->
    <!--热门推荐 start-->
    <div class="hot-suggest">
      <div class="hot-suggest-h3">
        <h3>热门推荐</h3>
        <div></div>
      </div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">
          <span>二手房</span>
        </mt-tab-item>
        <mt-tab-item id="2">
          <span>新房</span>
        </mt-tab-item>
        <mt-tab-item id="3">
          <span>租房</span>
        </mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 6" :title="'内容 ' + n">

          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 6" :title="'测试 ' + n">

          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n">

          </mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!--热门推荐 end-->
    <!--footer start-->
    <footer>
      <h4>友情链接</h4>
      <ul class="footer-ul">
        <li><a href="http://hhht.qu114.com/">呼和浩特去114</a></li>
        <li><a href="http://bt.loupan.com/">包头房地网</a></li>
        <li><a href="http://www.ttcy.com/">天堂草原音乐网</a></li>
      </ul>
      <div class="last-footer">
        <div class="footer-left">
          <a href="https://itunes.apple.com/cn/app/id1265727401?mt=8">
            <img src="../../../assets/iphone.png" alt="">
          </a>
          <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.example.administrator.work">
            <img src="../../../assets/android.png" alt="">
          </a>
        </div>
        <div class="footer-right">
          <div>北京福居网网络科技有限公司</div>
          <div>网络经营许可证 京ICP备13012924号-1</div>
        </div>
      </div>

    </footer>
    <!--footer end-->

  </div>
</template>
<script>
  import { Swipe, SwipeItem, Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
  export default{
    data () {
      return {
        selected: 'selected'
      }
    },
    components: {
      mtSwipe: Swipe,
      mtSwipeItem: SwipeItem,
      mtNavbar: Navbar,
      mtTabItem: TabItem,
      mtTabContainer: TabContainer,
      mtTabContainerItem: TabContainerItem
    }
  }
</script>

<style>
  a {
    text-decoration: none;
  }
  .section {
    height: 300px;
    width: 725px;
    margin: auto;
  }
  .list {
    height: 210px;
    margin-top: -20px;
    margin-bottom: 0px;
    margin-left: auto;
    margin-right: auto;
    background: #ffffff;
  }
  .flex {
    display: flex;
    padding-left: 0;
    list-style-type: none;
  }
  .flex li{
    flex: 1;
    padding-top: 10px;
  }
  .flex li div:first-child {
    height: 50px;
    padding-bottom: 10px;
  }
  .flex li div:last-child {
    height: 25px;
  }
  .flex li div img {
    width: 50px;
  }
  .hot {
    margin-top: 10px;
    display: flex;
    height: 80px;
    background-color: #ffffff;
    line-height: 25px;
  }
  .hot .hot-left {
    flex: 1;
  }
  .hot .hot-left {
    vertical-align: middle;
    padding-top: 10px;
  }
  .hot .hot-left img {
    vertical-align: middle;
  }
  .hot .hot-right {
    flex: 5;
  }
  .hot .hot-right ul {
    list-style: none;
    padding-left: 0;
    text-align: left;
  }
  .hot .hot-right .border {
    padding: 3px;
    border-radius: 5px;
    background-color: rgb(249,230,233);
    font-size: 14px;
    color: rgb(207,96,106);
  }
  .hot .hot-right .car-house {
    color: rgb(22,22,22);
  }
  .hot-suggest {
    margin-top: 10px;
  }
  .hot-suggest-h3 {
    text-align: left;
    background-color: #fff;
  }
  .hot-suggest-h3 h3 {
    margin: 0;
    padding-top: 10px;
    padding-left: 20px;
  }
  .hot-suggest .mt-navbar .mt-tab-item span {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: red;
    border: 1px solid red;
  }

  .hot-suggest .mt-tab-container .mt-tab-container-item .mt-cell{
    text-align: left;
  }

  footer {
    margin-top: 10px;
    height: 160px;
    background-color: rgb(47,49,48);
    color: rgb(113,114,114);
  }
  footer h4 {
    height: 50px;
    line-height: 50px;
    text-align: left;
    padding-left: 20px;
    margin: 0;
  }
  footer .footer-ul {
    margin: 0;
    height: 50px;
    border-top: 2px solid rgb(62,64,63);
  }
  footer .footer-ul li {
    float: left;
    width: 140px;
    text-align: left;
    padding-top: 10px;
  }
  footer .footer-ul li a {
    color: rgb(113, 114, 114);
  }
  footer .last-footer {
    display: flex;
  }
  footer .last-footer .footer-left {
    flex: 1;
  }
  footer .last-footer .footer-right {
    text-align: right;
    padding-right: 10px;
  }
</style>
