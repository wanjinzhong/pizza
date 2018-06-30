<template>
<div class="contact">
  <!--<Card>-->
    <!--<div slot="header">联系我们</div>-->
    <!--<div slot="body">电话：15881193175</div>-->
  <!--</Card>-->
  <el-card class="box-card" >
    <div slot="header" class="clearfix">
      <span>联系我们</span>
    </div>
    <div class="text item">
      <div>邮箱：neilw@synnex.com</div>
      <div>QQ：1051750377</div>
      <router-link :to="{name: 'phoneNumber'}">电话</router-link>
      <router-link :to="{name: 'personName'}">联系人</router-link>
      <router-view></router-view>
    </div>
  </el-card>
</div>

</template>

<script>
    export default {
        name: "contact",
      components:{},
      data() {
          return{
          }
      }
    }
</script>

<style scoped>

</style>
