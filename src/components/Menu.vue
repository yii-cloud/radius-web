<template>
    <a-layout-sider
      collapsible
      v-model="collapsed"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="logo" style="background: rgb(0, 21, 41);">
        <span class="title-name">{{systemName}}</span>
      </div>
      <a-menu theme="dark" mode="inline" :openKeys.sync="subKeys" :defaultSelectedKeys="itemKeys" @click="doChange">
        <a-menu-item key="user">
          <a @click="$router.push('/user')">
            <a-icon type="team" />
            <span>用户管理</span>
          </a>
        </a-menu-item>
        <a-menu-item key="product">
          <a @click="$router.push('/product')">
          <a-icon type="shopping" />
          <span>套餐管理</span>
          </a>
        </a-menu-item>
        <a-menu-item key="online">
          <a @click="$router.push('/online')">
          <a-icon type="global" />
          <span>在线用户</span>
          </a>
        </a-menu-item>
        <a-sub-menu 
          key="system"
        >
          <span slot="title"><a-icon type="setting" /><span>系统设置</span></span>
          <a-menu-item key="manager">
            <a @click="$router.push('/system/manager')">
            <a-icon type="user" />管理员
            </a>
          </a-menu-item>
          <a-menu-item key="nas">
            <a @click="$router.push('/system/nas')">
            <a-icon type="database" />NAS管理
            </a>
          </a-menu-item>
          <a-menu-item key="department">
            <a @click="$router.push('/system/department')">
            <a-icon type="appstore" />部门管理
            </a>
          </a-menu-item>
          <a-menu-item key="role">
            <a @click="$router.push('/system/role')">
            <a-icon type="solution" />角色管理
            </a>
          </a-menu-item>
          <a-menu-item key="menu">
            <a @click="$router.push('/system/resource')">
            <a-icon type="profile" />菜单管理
            </a>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
</template>

<script>
export default {
    name: 'Menu',
    data() {
    return {
      collapsed: false,
      itemKeys: [],
      subKeys: [],
      systemName: "Radius管理系统"
    }
  },
  watch: {
    collapsed(value) {
      if(value)
        this.systemName = "RADIUS";
      else
        this.systemName = "Radius管理系统"
    }
  },
  methods: {
    doChange() {
      this.itemKeys = [this.$router.currentRoute.name];
      if(this.$router.currentRoute.meta.parent) {
        this.subKeys = [this.$router.currentRoute.meta.parent];
      } else {
        this.subKeys = []
      }
    }
  },
  created() {
    this.doChange();
  }
}
</script>