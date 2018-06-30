<template>
  <div class="col-sl-12">
          <table>
              <tr>
                  <td style="width: 600px; vertical-align: top">
                    <h5>添加新的pizza</h5>
                    <Form :model="pizza" :rules="rules" label-position="right" label-width="50px" ref="pizzaForm">
                      <FormItem label="品种" prop="name">
                        <Input size="mini" v-model="pizza.name"/>
                      </FormItem>
                      <FormItem label="描述">
                        <Input size="mini" v-model="pizza.description" type="textarea"/>
                      </FormItem>
                      <h6>选项1</h6>
                      <FormItem label="尺寸">
                        <InputNumber size="mini" v-model="pizza.options[0].size"/>
                      </FormItem>
                      <FormItem label="价格">
                        <InputNumber size="mini" v-model="pizza.options[0].price"/>
                      </FormItem>
                    <h6>选项2</h6>
                      <FormItem label="尺寸">
                        <InputNumber size="mini" v-model="pizza.options[1].size"/>
                      </FormItem>
                      <FormItem label="价格">
                        <InputNumber size="mini" v-model="pizza.options[1].price"/>
                      </FormItem>
                      <Button native-type="submit" size="mini" type="primary" style="width: 100%" @click.prevent="submit('pizzaForm')">提交</Button>
                    </Form>
                  </td>
                  <td style="width: 500px;  vertical-align: top; padding-left: 50px">
                    <h5>菜单</h5>
                    <Table :data="menu">
                      <TableColumn prop="name" label="名称" width="350px">
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
  export default {
    name: "Admin",
    components: {Form, FormItem, InputNumber, Input, Button, Table, TableColumn},
    data() {
      return {
        pizza: {
          name: '',
          description: '',
          options: [
            {size:0, price:0},
            {size:0, price:0},
          ]
        },
        rules: {
          name: [
            {required: true, message: "名称不能为空", trigger:"blur"},
          ]
        },
        menu: [
          {id: 1, name: "榴莲pizza"}
        ]
      }
    },
    methods: {
      submit(formName) {
        this.$ref[formName].validate((valid) => {
          console.log(this.pizza.name);
        });
      },
      remove(id) {
        console.log(id);
      }
    }
  }
</script>

<style scoped>

</style>
