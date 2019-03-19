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
                <label><img src="../../assets/images/user.png" width="20px" height="20px"></label>
                <input type="text" name="username" id="username" placeholder="你的手机号或者用户名" />
            </div>
            <div class="int">
                <label><img src="../../assets/images/passwd.png" width="20px" height="20px"></label>
                <input type="password" name="password" id="password" placeholder="请输入密码" />
            </div>
            <div class="login">
                <button type="button" @click="onJumpIndex()">登录</button>
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
  name: 'Login',
  data() {
      return {
          
      }
  },
  methods: {
      onJumpIndex() {
          this.$router.push('/index')
      }
  }
}
</script>

<style scoped>
@import "./login.css";
</style>