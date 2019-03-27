<template>
  <div id="components-dropdown-demo-placement">
    <a-dropdown>
      <a-button style="color:#b3712b;background-color:#d8e2ec">
        <a-icon type="user"/>
        搞事情的
      </a-button>
      <a-menu slot="overlay">
        <a-menu-item>
          <a @click="logout()">
            退出登录
            <a-icon type="unlock"/>
          </a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
       realName: ""
    };
  },
  created() {
     this.getUser();
  },
  methods: {
    getUser() {
      this.axios.post(this.CONFIG.apiUrl + "/manager/info", {}, {
          headers: {
            "rad_access_token": sessionId
          }
        }).then(function(response) {

        }).catch(function(error) { 

        });
    },
    logout() {
      if (confirm("确定退出系统吗?!")) {
        var sessionId = localStorage.getItem("rad_access_token");
        this.axios.post(this.CONFIG.apiUrl + "/logout", {}, {
          headers: {
            "rad_access_token": sessionId
          }
        }).then(function(response) {

        }).catch(function(error) { 

        });
        localStorage.removeItem("rad_access_token")
        this.$router.push("/");
      }
    }
  }
};
</script>
<style>
#components-dropdown-demo-placement .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>