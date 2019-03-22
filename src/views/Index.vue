<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider
      collapsible
      v-model="collapsed"
    >
      <div class="logo" style="background: rgb(0, 21, 41);">
        <span class="title-name">GO-RADIUS</span>
      </div>
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-menu-item key="1">
          <a @click="toUser()">
            <a-icon type="team" />
            <span>用户管理</span>
          </a>
        </a-menu-item>
        <a-menu-item key="2">
          <a @click="toProduct()">
          <a-icon type="shopping" />
          <span>套餐管理</span>
          </a>
        </a-menu-item>
        <a-menu-item key="3">
          <a @click="toOnline()">
          <a-icon type="global" />
          <span>在线用户</span>
          </a>
        </a-menu-item>
        <a-sub-menu
          key="sub1"
        >
          <span slot="title"><a-icon type="setting" /><span>系统设置</span></span>
          <a-menu-item key="4"><a-icon type="user" />管理员</a-menu-item>
          <a-menu-item key="5"><a-icon type="database" />NAS管理</a-menu-item>
          <a-menu-item key="6"><a-icon type="appstore" />部门管理</a-menu-item>
          <a-menu-item key="7"><a-icon type="solution" />角色管理</a-menu-item>
          <a-menu-item key="8"><a-icon type="profile" />菜单管理</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #3d72ab; padding: 0">
          <div style="float:right; margin-right:30px;height:64px;">可以的啊啊啊</div>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          Bill is a cat.
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    toUser() {
      this.$router.push('/user');
    },
    toProduct() {
      this.$router.push('/product');
    },
    toOnline() {
      this.$router.push('/online');
    }
  }
}
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}

.title-name {
    color: #90a0af;
    display: block;
    height: 32px;
    text-align: center;
    padding-top: 5px;
}
</style>