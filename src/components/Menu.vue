<template>
    <a-layout-sider
      collapsible
      v-model="collapsed"
    >
      <div class="logo" style="background: rgb(0, 21, 41);">
        <span class="title-name">GO-RADIUS</span>
      </div>
      <a-menu theme="dark" mode="inline" :selectedKeys="selectedKeys" :openKeys.sync="openSub">
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
          <a-menu-item key="4">
            <a @click="toManager()">
            <a-icon type="user" />管理员
            </a>
          </a-menu-item>
          <a-menu-item key="5"><a-icon type="database" />NAS管理</a-menu-item>
          <a-menu-item key="6"><a-icon type="appstore" />部门管理</a-menu-item>
          <a-menu-item key="7"><a-icon type="solution" />角色管理</a-menu-item>
          <a-menu-item key="8"><a-icon type="profile" />菜单管理</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
</template>

<script>
export default {
    name: 'Menu',
    props: ["selectedKeys", "openSub"],
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
    },
    toManager() {
      this.$router.push('/system/manager');
    }
  }
}
</script>