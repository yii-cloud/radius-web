<template>
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="logo" style="background: rgb(0, 21, 41);">
        <span class="title-name" @click="$router.push('/index')">{{systemName}}</span>
      </div>
      <a-menu theme="dark" mode="inline" :openKeys.sync="subKeys" :defaultSelectedKeys="itemKeys" @click="doChange">
        <template v-for="m in menus">
        <a-menu-item v-if="isAmenu(m)" :key="m.frontKey">
          <a @click="$router.push(m.frontRouter)">
            <a-icon :type="m.icon" />
            <span>{{m.name}}</span>
          </a>
        </a-menu-item>
        
        <a-sub-menu v-if="isBmenu(m)"
          :key="m.frontKey"
        >
          <span slot="title"><a-icon :type="m.icon" /><span>{{m.name}}</span></span>
          <a-menu-item v-for="c in m.children" :key="c.frontKey">
            <a @click="$router.push(c.frontRouter)">
            <a-icon :type="c.icon" />{{c.name}}
            </a>
          </a-menu-item>
        </a-sub-menu>
        </template>
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
      systemName: "Radius管理系统",
      menus:[]
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
    },
    buildMenu() {
      this.axios.post(this.CONFIG.apiUrl + "/session/resource", {}).then(response => {
          this.menus = response.data.data;
      });
    },
    isAmenu(menu) {
       return menu.children.length == 0 || menu.children[0].level == 3;
    },
    isBmenu(menu) {
       return menu.children.length > 0 && menu.children[0].level != 3;
    }
  },
  mounted() {
    this.buildMenu();
  },
  created() {
    this.doChange();
  }
}
</script>

<style>
.title-name {
    color: #90a0af;
    height: 50px;
    display: block;
    text-align: center;
    padding-top: 15px;
}
</style>
