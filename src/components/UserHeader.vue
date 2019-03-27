<template>
import { error } from 'util';
  <div id="components-dropdown-demo-placement">
    <a-dropdown>
      <a-button style="color:#b3712b;background-color:#d8e2ec">
        <a-icon type="user"/>
        {{user.realName}}
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
      user: this.$store.getters.getUser
    };
  },
  methods: {
    logout() {
      if (confirm("确定退出系统吗?!")) {
        var sessionId = localStorage.getItem("rad_access_token");
        this.axios.get(this.CONFIG.apiUrl + "/logout", {
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