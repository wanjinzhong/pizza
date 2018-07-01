<template>
  <div id="app">
    <div class="container">
      <Header></Header>
    </div>
    <div class="container" style="margin-top: 20px">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header"

  export default {
    name: 'app',
    components: {Header},
    data() {
      return {
        // msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      this.axios.get("menu.json").then((response) => {
                this.loading = false;
                if (response.status == 200) {
                    var menus = [];
                    for (var key in response.data) {
                        var menu = response.data[key];
                        menu["id"] = key;
                        menus.push(menu);
                    }
                        this.$store.commit("setMenuItems", menus);
                }
            })
    }
  }
</script>

<style>
  #app {
  }

</style>
