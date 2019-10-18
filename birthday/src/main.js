import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 引入第三方的组件库mintui
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
// 3将mint-ui注册到vue实例中
Vue.use(MintUI)


Vue.prototype.axios=axios

Vue.config.productionTip = false

import './components/birthday/css/all.css' //加载全局样式

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
