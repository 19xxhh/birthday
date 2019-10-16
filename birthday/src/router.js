import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Index from './components/birthday/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/',component: Home},
    {path: 'Index',component: Index},
  ]
})
