<template>
  <div>
    <mt-tab-container v-model="selected" class="tab-container">
      <mt-tab-container-item id="home-page">
        <mt-cell>
          <mt-home></mt-home>
        </mt-cell>
      </mt-tab-container-item>

      <mt-tab-container-item id="tool">
        <mt-cell>
          <mt-tool></mt-tool>
        </mt-cell>
      </mt-tab-container-item>

      <mt-tab-container-item id="house">
        <mt-cell>
          <mt-house></mt-house>
        </mt-cell>
      </mt-tab-container-item>

      <mt-tab-container-item id="my">
        <mt-cell>
          <mt-my></mt-my>
        </mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="home-page">
        <img slot="icon" src="../../../assets/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="tool">
        <img slot="icon" src="../../../assets/tool.png">
        工具
      </mt-tab-item>
      <mt-tab-item id="house">
        <img slot="icon" src="../../../assets/house.png">
        看房
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="../../../assets/my.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
  import Home from './MainHeader.vue'
  import Tool from '../../tool/home/Tool.vue'
  import House from '../../house/home/House.vue'
  import My from '../../my/home/My.vue'
  export default{
    data () {
      return {
        selected: 'selected'
      }
    },
    components: {
      mtTabbar: Tabbar,
      mtTabItem: TabItem,
      mtTabContainer: TabContainer,
      mtTabContainerItem: TabContainerItem,
      mtHome: Home,
      mtTool: Tool,
      mtHouse: House,
      mtMy: My
    }
  }
</script>

<style>
  .tab-container {
    background-color: #0000ed;
  }
</style>
