<template>
  <a-layout id="components-layout-demo-side" style="height: 100%">
    <Menu v-if="$route.path !== '/'" />
    <a-layout>
      <Header v-if="$route.path !== '/'"/>
      <router-view/>
      <Footer/>
    </a-layout>
  </a-layout>
</template>

<style>
@import url(./css/base.css);

#app {
  height: 100%;
}
</style>

<script>
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Menu,
    Header,
    Footer
  }
};
</script>
