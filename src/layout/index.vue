<template>
  <o-view full column>
    <keep-alive> <router-view class="main" /> </keep-alive>
    <router-view name="tabbar" />
  </o-view>
</template>
<script>
import Tabbar from "./tabbar";
export default {
  components: {
    [Tabbar.name]: Tabbar
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  flex: 1;
}
</style>
