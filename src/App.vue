<template>
  <div id="app">
    <!-- 头部 -->
    <app-header :poiInfo="poiInfo"></app-header>
    <!-- 导航 -->
    <app-nav :commentNum="commentNum"></app-nav>
    <!-- 内容 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Nav from './components/nav/Nav.vue'

export default {
  name: 'app',
  data() {
    return {
      poiInfo:{},
      commentNum:0
    }
  },
  components: {
    appHeader:Header,
    appNav:Nav,
  },
  created() {
    fetch('/api/goods')
      .then(res=>res.json())
        .then(response=>{
          // console.log(response)
          if(response.data.code == 0){
            this.poiInfo = response.data.data.poi_info
          }
          // console.log(this.poiInfo)     
        }),
    fetch('/api/ratings')
      .then(res=>res.json())
        .then(response=>{
          // console.log(response)
          if(response.data.code == 0){
            this.commentNum = response.data.data.comment_num
            // console.log(this.commentNum)
          }    
        })
  },
  


}
</script>

<style>

</style>
