import Vue from "vue";
import Vuex from "vuex"
import checkPrice from "./modules/checkPrice";

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        checkPrice
    }
})