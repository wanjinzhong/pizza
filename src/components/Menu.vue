<template>
  <div class="col-sl-12">
          <table>
              <tr>
                  <td style="width: 600px; vertical-align: top">
                      <h5 style="width: 100%; margin: 0 auto">菜单</h5>
                      <Table  :data="menuItems" v-loading="loading">
          <TableColumn type="expand">
              <template  slot-scope="props">
                  <Table :data="props.row.options">
                      <TableColumn label="尺寸" prop="size"></TableColumn>
                      <TableColumn label="价格" prop="price"></TableColumn>
                        <TableColumn label="加入">
                            <template slot-scope="scope">
                                <Button circle type="info" size='mini' @click="add(scope.row.id)" icon="el-icon-plus"></Button>
                            </template>
                </TableColumn>
                  </Table>
              </template>
          </TableColumn>
          <TableColumn label="名称" prop="name"></TableColumn>
          <TableColumn label="描述" prop="description"></TableColumn>
          </Table>
                  </td>
                  <td style="width: 500px;  vertical-align: top; padding-left: 50px">
                      <h5 style="width: 100%; margin: 0 auto">购物车</h5>
                      <Table :data="basket" style="">
              <TableColumn label="名称" prop="name" width="150px"></TableColumn>
              <TableColumn label="价格" prop="price" width="50px"></TableColumn>
              <TableColumn label="数量" width="150px">
                <template slot-scope="prop">
                    <InputNumber size="mini" v-model="prop.row.amount" @change="changeAmount(prop.row.id)"/>
                </template>
              </TableColumn>
              <TableColumn width="70px">
                  <template slot-scope="props">
                      <Button circle size="mini" type="danger" icon="el-icon-delete" @click="remove(props.row.id)"></Button>

                  </template>
              </TableColumn>
          </Table>
          <p>总价：{{total}}</p>
          <Button type="primary" size="mini" style = "width:100%">提交</Button>
                  </td>
              </tr>
          </table>
  </div>
</template>

<script>
import {Table, TableColumn, Button, InputNumber} from "element-ui";
    export default {
        name: "Menu",
        components: {Table, TableColumn, Button, InputNumber},
        data() {
            return {
                basket: [],
                loading: false
            }
        },
        methods: {
            add(id) {
                console.log(id);
                var exist = false;
                for (var i in this.basket) {
                    if (id == this.basket[i].id) {
                       this.basket[i].amount ++;
                       return;
                    }
                  }
                for(var i in this.getMenuItems) {
                    for (var j in this.getMenuItems[i].options) {
                        var item = this.getMenuItems[i].options[j];
                        if (id === item.id) {
                      
                            this.basket.push({
                                id: item.id,
                                name: this.getMenuItems[i].name + "-" + item.size,
                                price: item.price,
                                amount: 1
                            });
                            break;
                        }
                    }
                }
            },
            remove(id) {
                for (var i in this.basket) {
                    if (this.basket[i].id == id) {
                        this.basket.splice(i, 1);
                        break;
                    }
                }
            },
            changeAmount(id) {
                for (var i in this.basket) {
                    if (this.basket[i].id == id && this.basket[i].amount <= 0) {
                        this.remove(id);
                    }
            }
            }
        },
        computed: {
            total() {
                var total = 0;
                for (var i in this.basket) {
                    total += this.basket[i].amount * this.basket[i].price;
                }
                return total;
            },
            menuItems() {
                return this.$store.getters.getMenuItems;
            }
        }
        }
</script>

<style scoped>

</style>
