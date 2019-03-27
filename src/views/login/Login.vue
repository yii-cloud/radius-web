
import { stringify } from 'querystring';
<template>
  <div class="panel-wrapper">
    <div class="panel">
      <!--面板的头部-->
      <div class="panel-top">
        <h2>登陆页面</h2>
      </div>
      <form id="theForm" action="/login" method="post">
        <!--面板的主要内容-->
        <div class="panel-content">
          <div class="int">
            <label>
              <img src="../../assets/images/user.png" width="20px" height="20px">
            </label>
            <input v-model="username" id="username" placeholder="你的手机号或者用户名">
          </div>
          <div class="int">
            <label>
              <img src="../../assets/images/passwd.png" width="20px" height="20px">
            </label>
            <input v-model="password" id="password" placeholder="请输入密码">
          </div>
          <div class="login">
            <button type="button" @click="login()">登录</button>
          </div>
          <div class="reg">
            <span style="font-weight: 500;color: orangered"></span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.axios.post(this.CONFIG.apiUrl + "/login", {
            username: this.username,
            password: this.password
        }).then(response => {
            var resultData = response.data;
            if(resultData.code == 1) {
              alert(resultData.message);
              return;
            }
            localStorage.setItem("rad_access_token", resultData.data);
            this.$router.push("/index");
        }).catch(function() {
            return;
        });
    }
  }
};
</script>

<style scoped>
@import "./login.css";
</style>