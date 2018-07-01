<template>
  <div class="col-sl-12">
          <table>
              <tr>
                  <td style="width: 600px; vertical-align: top">
                    <NewPizza></NewPizza>
                  </td>
                  <td style="width: 500px;  vertical-align: top; padding-left: 50px">
                    <h5>菜单</h5>
                    <Table :data="getMenuItems"  v-loading="loading">
                      <TableColumn prop="name" label="名称" width="350px">
                        <template slot-scope="props">
                          <span :title="props.row.description">{{props.row.name}}</span>
                        </template>
                      </TableColumn>
                      <TableColumn label="操作">
                        <template  slot-scope="props"><Button circle size="mini" type="danger" icon="el-icon-delete" @click="remove(props.row.id)"></Button></template>
                      </TableColumn>
                    </Table>
                  </td>
              </tr>
          </table>
  </div>
</template>

<script>
import {Form, FormItem, InputNumber, Input, Button, Table, TableColumn } from "element-ui";
import NewPizza from "./NewPizza";
  export default {
    name: "Admin",
    components: {Form, FormItem, InputNumber, Input, Button, Table, TableColumn, NewPizza},
    data() {
      return {
        loading: false
      }
    },
    computed: {
      getMenuItems() {
                return this.$store.getters.getMenuItems;
            }
    },
    methods: {
      remove(id) {
        var name;
        for(var i in this.getMenuItems) {
          if (this.getMenuItems[i].id == id) {
            name = this.getMenuItems[i].name;
          }
        }
        this.$confirm("确定要删除‘" + name + "'?", "删除提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.axios.delete("menu/" + id + ".json").then((response) => {
            if(response.status == 200) {
              this.$message({
                type: "success",
                message: "删除成功"
              });
              this.reload();
            }
          })
        }).catch(()=>{});
      },
      reload() {
        this.loading = true;
            this.axios.get("menu.json").then((response) => {
                this.loading = false;
                if (response.status == 200) {
                    var menus = [];
                    for (var key in response.data) {
                        var menu = response.data[key];
                        menu["id"] = key;
                        menus.push(menu);
                        this.$store.commit("setMenuItems", menus);
                    }
                }
            })
      }
    }
  }
</script>

<style scoped>

</style>
