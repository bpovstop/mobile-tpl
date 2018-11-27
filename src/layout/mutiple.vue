<template>
  <div class="mutiple">
    <div class="mutiple-nav">
      <router-link v-for="item in multiplePage" :key="item.route" :to="item.route" exact>
        <img slot="icon" src="@/assets/image/logo.png">
        {{item.name}}
      </router-link>
    </div>
    <keep-alive>
      <router-view class="main"/>
    </keep-alive>
  </div>
</template>

<script>
import { bindComputed } from "@okvue/vuex-bind";
export default {
  extends: {
    computed: bindComputed("multiplePage")
  },
  data() {
    this.pages = [
      {
        route: "/",
        icon: "logo"
      }
    ];
    return {
      pages: [],
      selected: "/"
    };
  }
};
</script>
<style lang="scss" scoped>
.mutiple {
  height: 100%;
}
.mutiple-nav {
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
}
.main {
  /* default set padding top as head */
  padding-top: 40px;
}
</style>

