import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import VueRouter from "vue-router";
import { routes } from "./route/routes";
Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'

})
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
