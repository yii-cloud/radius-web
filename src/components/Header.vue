<template>
  <a-layout-header style="background: #3d72ab; padding: 0">
    <div style="float:right; margin-right:30px;">
      <UserHeader/>
    </div>
  </a-layout-header>
</template>

<script>
import UserHeader from "@/components/UserHeader";

export default {
  components: {
    UserHeader
  },
  name: "Header"
};
</script>