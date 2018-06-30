<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
          <Form lable-position="right" label-width="80px" :model="registerData" :rules="rules" ref="registerForm">
            <FormItem label="邮箱" prop="email">
              <Input v-model="registerData.email"/>
            </FormItem>
            <FormItem label="密码" prop="password">
              <Input v-model="registerData.password" type="password"/>
            </FormItem>
            <FormItem label="确认密码" prop="confirmPassword">
              <Input v-model="registerData.confirmPassword" type="password"/>
            </FormItem>
            <Button type="success" style="width: 100%" @click="onSubmit('registerForm')">注册</Button>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Form, FormItem, Button, Input} from "element-ui"
  import axios from "axios"
    export default {
        name: "Regist",
      components:{Form, FormItem, Button, Input},
      data() {
          return {
            registerData: {
              email: "",
              password: "",
              confirmPassword: ""
            },
            rules: {
              email: [
                {required:true, message: "请输入邮箱", trigger:"blur"},
                {type:'email', message: "这不是邮箱", trigger:"blur"},
              ],
              password: [
                {required: true, message: "请输入密码", trigger:"blur"},
                {min:6, message: "至少3位字符", trigger: "blur"}
              ],
              confirmPassword: [
                {required: true, message: "请输入密码", trigger:"blur"},
              ]
            }
          }
      },
      methods: {

        onSubmit(formName) {
          var self = this;
          this.$refs[formName].validate((valid) => {
            if (valid && this.registerData.password == this.registerData.confirmPassword) {
              axios.post("users.json", {email: this.registerData.email, password: this.registerData.password}).then((response) => {
                this.$message({
                  message: "注册成功",
                  type: "success",
                  onClose() {
                    self.$router.push("/login");
                  }
                })
              })
            } else {
              this.$message({
                message: "两次密码不一致",
                type: "error"
              })
            }
          })
        }
      }
    }

</script>

<style scoped>

</style>
