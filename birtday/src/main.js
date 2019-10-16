import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from "mint-ui"

import "mint-ui/lib/style.css"
Vue.use(MintUI)

Vue.prototype.axios=axios

Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
