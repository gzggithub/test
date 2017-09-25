import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/main/home/Home'
import Tool from '../components/tool/home/Tool'
import Login from '../components/house/loginPage/login/Login'
import Address from '../components/main/address/Address'
import Self from '../components/my/home/My'
import Search from '../components/main/search/Search'
import TwoHouse from '../components/main/secondHouse/SecondHouse'
import NewHouseList from '../components/main/newHouseList/NewHouseList'
import Renting from '../components/main/rentHouse/RentHouse'
import MapList from '../components/main/mapHouse/MapHouse.vue'
import ToolExamine from '../components/tool/checkStore/CheckStore'
import CheckPlot from '../components/main/searchVillage/SearchVillage'
import SchoolDis from '../components/main/schoolDistrictHousing/SecondHouse'
import Entrust from '../components/main/onlineTrust/OnlineTrust'
import ClassAll from '../components/main/secondHouse/secondHouseList/SecondHouseList'
import Special from '../components/main/specialSubjectList/SpecialSubjectList'
import ToolBroker from '../components/tool/broker/Broker'
import ToolCompute from '../components/tool/mortgageCalculator/MortgageCalculator'
import ToolTaxation from '../components/tool/taxCalculatorNewHouse/TaxCalculatorNewHouse'
import ToolEvalute from '../components/tool/houseEvaluation/HouseEvaluation'
/* 插件语法 */
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/Tool',
      component: Tool
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/self',
      component: Self
    },
    {
      path: '/address',
      component: Address
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/TwoHouse',
      component: TwoHouse
    },
    {
      path: '/NewHouseList',
      component: NewHouseList
    },
    {
      path: '/renting',
      component: Renting
    },
    {
      path: '/mapList',
      component: MapList
    },
    {
      path: '/ToolExamine',
      component: ToolExamine
    },
    {
      path: '/CheckPlot',
      component: CheckPlot
    },
    {
      path: '/schoolDis',
      component: SchoolDis
    },
    {
      path: '/Entrust',
      component: Entrust
    },
    {
      path: '/classAll',
      component: ClassAll
    },
    {
      path: '/Special',
      component: Special
    },
    {
      path: '/ToolBroker',
      component: ToolBroker
    },
    {
      path: '/ToolCompute',
      component: ToolCompute
    },
    {
      path: '/ToolTaxation',
      component: ToolTaxation
    },
    {
      path: '/ToolEvalute',
      component: ToolEvalute
    }
  ]
})
