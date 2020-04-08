import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import './../node_modules/bulma/css/bulma.css';
import VueRouter from "vue-router";
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';
import { routes } from "./route/routes";
Vue.config.productionTip = false
Vue.use(VueCarousel);
Vue.use(VueRouter);
Vue.use(Vuesax);

const router = new VueRouter({
  routes,
  mode: 'history'

})
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
