import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex);

export default new vuex.Store({
    state: {
        menuItems: [],
        currentUser: null,
    isLogin: false
    },
    getters: {
        getMenuItems(state) {
            return state.menuItems;
        },
        getCurrentUser(state) {
            return state.currentUser;
        }
    },
    mutations: {
        setMenuItems(state, data) {
            state.menuItems = data;
        },
        setCurrentUser(state, data) {
            state.currentUser = data;
                   state.isLogin = data != null;
               },
               getIsLogin(state) {
                return state.isLogin;
            }
    },
    actions: {

    }
})