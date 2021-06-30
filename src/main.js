import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'



import List from './components/List'
import Detail from './components/Detail'
import ListCategory from './components/ListCategory'


import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const routes =[
  {path:'/', component:List},
  {path:'/detalle/:id', component:Detail},
  {path:'/categoria/:id/piezas', component: ListCategory}
]

const router = new VueRouter ({
  mode: 'history',
  routes //
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
