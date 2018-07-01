<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
          <Form label-position="right" label-width="80px" :model="loginData" :rules="rules" ref="loginForm">
            <FormItem label="邮箱" prop="email">
              <Input v-model="loginData.email"/>
            </FormItem>
            <FormItem label="密码" prop="password">
              <Input v-model="loginData.password" type="password"/>
            </FormItem>
            <Button type="success" native-type="submit" style="width: 100%" @click.prevent="onSubmit('loginForm')">登陆</Button>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Form, FormItem, Button, Input} from "element-ui";
  export default {
    name: "Login",
    components:{Form, FormItem, Button, Input},
    data() {
      return {
        loginData: {
          email:"",
          password:""
        },
        rules: {
          email: [
            {required: true, message: "邮箱不能为空", trigger:"blur"},
            {type: "email", message: "邮箱格式不正确", trigger:"blur"}
          ],
          password: [
            {required: true, message: "密码不能为空", trigger:"blur"},
            {min: 6, message:"密码至少6位", trigger:"blur"}
          ]
        }
      }
    },
    methods: {
      onSubmit(loginForm) {
        var self = this;
        this.$refs[loginForm].validate((valid) => {
          if (valid) {
            this.axios.get('/users.json').then((response) => {
              var data = response.data;
              var loginSuccess = false;
              var users = [];
              for (let key in data) {
                users.push(data[key]);
              }
              var res = users.filter((user) => {
                return user.email === self.loginData.email && user.password === self.loginData.password
              })
              if (res.length == 0) {
                self.$message({
                  type: "error",
                  message: "用户名或密码错误"
                })
              } else {
                self.$message({
                    type: "success",
                    message: "登陆成功"
                  });
                  self.$store.commit("setCurrentUser", self.loginData.email);
                  self.$router.push("/");
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>