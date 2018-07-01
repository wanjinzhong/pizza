import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {routes} from "./routers"
import axios from "axios";
import store from "./store/stores"

Vue.use(VueRouter);
Vue.use(ElementUI);

axios.defaults.baseURL="https://wd1347713459zgtrvt.wilddogio.com/";
Vue.prototype.axios = axios;



const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savePosition) {

    // return {x:0, y: 100}

    // return {selector:".btn"}


    // if (savePosition) {
    //   return savePosition;
    // } else {
    //   return{x:0, y:0}
    // }
  }
});
router.beforeEach(function(to, from, next){
  // if(store.getters.)
  if (to.path == '/login' || to.path == '/register' || store.getters.getIsLogin) {
    next()
  } else {
    Vue.prototype.$alert("您还没有登陆，请先登录", "登录", {
      callback: function(action){
        next("/login");
      }
    });
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
