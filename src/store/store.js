import Vue from "vue";
import vuex from "vuex";
import menu from "./module/menu";
import user from "./module/user";

Vue.use(vuex);

export const store = new vuex.Store({
    modules: {menu, user}
})
