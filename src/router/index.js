import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Goods from '../components/goods/Goods'
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import Ratings from '../components/ratings/Ratings'
import Seller from '../components/seller/Seller'

export default new VueRouter({
  routes: [
    {
      path:'/',
      redirect:'/goods'
    },
    {
      path:'/header',
      name:'Header',
      component:Header
    },
    {
      path:'/goods',
      name:'Goods',
      component:Goods
    },
    {
      path:'/nav',
      name:'Nav',
      component:Nav
    },
    {
      path:'/ratings',
      name:'Ratings',
      component:Ratings
    },
    {
      path:'/seller',
      name:'Seller',
      component:Seller
    }
  ],
  mode:'history',
  linkActiveClass:'active'
})