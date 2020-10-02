import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './views/Home'

Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    {name:'Home',path:'/',component:Home,},
    {name:'List',path:'/list',component:() => import('./views/List')}
  ]
})



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
