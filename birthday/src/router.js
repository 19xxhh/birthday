import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Index from './components/birthday/Index.vue'
import AllWishes from './components/birthday/AllWishes.vue'
import BirthEmail from './components/birthday/BirthEmail.vue'
import BirthEmail2 from './components/birthday/BirthEmail2.vue'
import BirthList from './components/birthday/BirthList.vue'
import BirthWishes from './components/birthday/BirthWishes.vue'
import BirthWishes2 from './components/birthday/BirthWishes2.vue'
import BirthWishes3 from './components/birthday/BirthWishes3.vue'
import Member from './components/birthday/Member.vue'
import Member2 from './components/birthday/Member2.vue'
import Year from './components/birthday/Year.vue'
import YearWishes from './components/birthday/YearWishes.vue'
import YearWishes2 from './components/birthday/YearWishes2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/',component: Home},
    // {path: 'Index',component: Index},
    {path: 'AllWishes',component: AllWishes},
    {path: 'BirthEmail',component: BirthEmail},
    {path: 'BirthEmail2',component: BirthEmail2},
    {path: 'BirthList',component: BirthList},
    {path: 'BirthWishes',component: BirthWishes},
    {path: 'BirthWishes2',component: BirthWishes2},
    {path: 'BirthWishes3',component: BirthWishes3},
    {path: 'Member',component: Member},
    {path: 'Member2',component: Member2},
    {path: 'Year',component: Year},
    {path: 'YearWishes',component: YearWishes},
    {path: 'YearWishes2',component: YearWishes2},
  ]
})
