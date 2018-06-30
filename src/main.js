import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {routes} from "./routers"
import axios from "axios";

Vue.use(VueRouter);
Vue.use(ElementUI);

axios.defaults.baseURL="https://wd1347713459zgtrvt.wilddogio.com/";



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
// router.beforeEach((to, from, next) => {
//   // if(store.getters.)
//   if (to.path == '/login' || to.path == '/register') {
//     next()
//   } else {
//     alert("您还没有登陆，请先登录");
//     next("/login");
//   }
// });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
