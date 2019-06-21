import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false
//引入通用Css样式
import '../src/assets/css/reset.css'
//引入文字图标样式文件
import '../src/common/css/font_kltmmxi4grm/iconfont.css'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
