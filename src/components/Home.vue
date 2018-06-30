<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="backgroud">
        <h2>欢迎大家品尝Pizza!</h2>
        <h1>这里有你非常喜欢的Pizza!</h1>
        <Button class="btn" type="primary" @click="goToMenu">Let`s order!</Button>
      </div>
    </div>
  </div>
</template>

<script>
  import {Button} from "element-ui";

  export default {
    name: "Home",
    components: {Button},
    methods: {
      goToMenu() {
        // this.$router.go(-1)
        // this.$router.push("/menu");
        // this.$router.replace("/menu");
        this.$router.push({name: "menuLink"});
      }
    }
  }
</script>

<style scoped>
  #home {
    background: url("../../src/assets/pizza.jpg");
    height: 85vh;
    padding: 10%;
  }

  h1 h2 {
    margin: 20px;
  }

  .backgroud {
    background: #eee;
    opacity: 0.8;
    max-width: 70vw;
    padding: 20px 0;
    margin: 0 auto;
  }
</style>
