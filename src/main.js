import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import './../node_modules/bulma/css/bulma.css';
import Vuesax from 'vuesax';

import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';
import  router from "./route/routes";
import  store  from "./store/store";
Vue.config.productionTip = false
Vue.use(VueCarousel);
Vue.use(Vuesax);

new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')
