<template>
  <div id="about">
    <table>
      <tr>
        <td width="200px">
    <Menu theme="light" router>
      <MenuItem index="history" :route="{name:'historyLink'}">历史订单</MenuItem>
      <MenuItem index="contact" :route="{name:'contactLink'}">联系我们</MenuItem>
      <MenuItem index="orderingGuide" :route="{name:'orderingGuideLink'}">点餐文档</MenuItem>
      <MenuItem index="delivery" :route="{name:'deliveryLink'}">快递信息</MenuItem>
    </Menu></td>
        <td width="70%" valign="top">
    <router-view style="margin: 20px"></router-view></td></tr>
    </table>
  </div>
</template>

<script>
  import {Menu, MenuItem} from "element-ui"
    export default {
        name: "About",
      components: {Menu, MenuItem}
    }
</script>

<style scoped>

</style>
