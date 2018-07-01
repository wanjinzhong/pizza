import Vue from "vue";
import vuex from "vuex";
import menu from "./module/menu";
import user from "./module/user";

Vue.use(vuex);

export default new vuex.Store({
    modules: {menu, user}
})