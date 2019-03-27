<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <Menu />
    <a-layout>
      <Header/>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>用户管理</a-breadcrumb-item>
          <a-breadcrumb-item>用户列表</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          Bill is a cat.
        </div>
      </a-layout-content>
      <Footer/>
    </a-layout>
  </a-layout>
</template>
<script>
import Menu from "@/components/Menu"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  components: {
    Menu,
    Header,
    Footer
  },
  data() {
    return {
      
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