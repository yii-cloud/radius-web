<template>
  <a-layout id="components-layout-demo-side" :style="{ marginLeft: '200px' }">
    <Menu />
    <a-layout>
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
.title-name {
    color: #90a0af;
    display: block;
    height: 32px;
    text-align: center;
    padding-top: 5px;
}
</style>