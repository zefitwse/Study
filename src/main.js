import Vue from 'vue'
import App from './App.vue'

import "amfe-flexible"
import "../src/assets/reset.css"
import less from "less"
Vue.use(less)

Vue.config.productionTip = false


import Vant from 'vant';
import 'vant/lib/index.css';
import {Lazyload} from "vant";

Vue.use(Vant);
Vue.use(Lazyload,{
  lazyComponent:true
});
Vue.filter("formatMoney",function (e){
  return `￥${e.toFixed(2)}元`
})


import { Pagination } from 'vant';
Vue.use(Pagination);

import { Search } from 'vant';
Vue.use(Search);

import router from "../src/router/index"

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
