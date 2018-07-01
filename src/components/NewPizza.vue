<template>
    <div>
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
                        <InputNumber size="mini" v-model="pizza.options[0].size"   :min="1"/>
                      </FormItem>
                      <FormItem label="价格">
                        <InputNumber size="mini" v-model="pizza.options[0].price"  :min="1"/>
                      </FormItem>
                    <h6>选项2</h6>
                      <FormItem label="尺寸">
                        <InputNumber size="mini" v-model="pizza.options[1].size"  :min="1"/>
                      </FormItem>
                      <FormItem label="价格">
                        <InputNumber size="mini" v-model="pizza.options[1].price"  :min="1"/>
                      </FormItem>
                      <Button native-type="submit" size="mini" type="primary"
                       style="width: 100%" @click.prevent="onSubmit('pizzaForm')">提交</Button>
                    </Form>
    </div>
</template>
<script>
import {Form, FormItem, Button, Input, InputNumber} from "element-ui";
export default {
    name: "NewPizza",
    components: {Form, FormItem, Button, Input, InputNumber},
    data() {
      return {
        pizza: {
          name: '',
          description: '',
          options: [
            {id: this.guid,size:0, price:0},
            {id: this.guid,size:0, price:0},
          ]
        },
        rules: {
          name: [
            {required: true, message: "名称不能为空", trigger:"blur"},
          ]
        },
      }
    },
    methods: {
      onSubmit(formName) {
        var self = this;
        this.pizza.options[0]["id"] = this.guid;
        this.pizza.options[1]["id"] = this.guid;
        this.$refs[formName].validate((valid) => {
          this.axios.post("menu.json", this.pizza).then((response) => {
            if (response.status == 200) {
              this.$message({
              type: "success",
              message: "保存成功",
              onClose: function() {
                self.reload();
                self.pizza = {
                  name: '',
                  description: '',
                  options: [
                    {id: self.guid,size:0, price:0},
                    {id: self.guid,size:0, price:0},
                  ]
                }
              }
            });
            }
          });
        })
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
                    }
                        this.$store.commit("setMenuItems", menus);
                }
            })
      },
      
    },
      computed: {
        guid(){
           return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
          });
        }
}
      
    }
</script>
<style>

</style>
