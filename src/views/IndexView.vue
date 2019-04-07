<template>
  <a-layout id="components-layout-demo-side">
    <Menu />
    <a-layout :style="{ marginLeft: '200px' }">
      <Header/>
      <router-view/>
      <Footer/>
    </a-layout>
  </a-layout>
</template>

<script>
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
    name: "IndexView",
    components: {
    Menu,
    Header,
    Footer
  }
}
</script>

<style>
  .content-div {
    padding: 24px 24px 39px 24px;
    background: #fff;
     min-height: 360px;
  }
</style>