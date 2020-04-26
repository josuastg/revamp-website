import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import './../node_modules/bulma/css/bulma.css';
import vSelect from "vue-select";
import Vuesax from 'vuesax';
import VueMask from 'v-mask';
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';
import 'vue-select/dist/vue-select.css';
import  router from "./route/routes";
import  store  from "./store/store";
Vue.config.productionTip = false
Vue.use(VueCarousel);
Vue.use(Vuesax);
Vue.component('v-select', vSelect)
Vue.use(VueMask);

new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')
