<template>
  <div class="mutiple-layout">
    <keep-alive>
      <router-view class="main"/>
    </keep-alive>
    <footer>
      <router-link v-for="item in multiplePage" :key="item.route" :to="item.route" exact>
        <div column>
          <div>
            <component
              v-if="item.icon"
              slot="icon"
              :is="filterIcon(item).name"
              :src="filterIcon(item).src"
              class="icon"
            />
          </div>
          <span>{{item.name}}</span>
        </div>
      </router-link>
    </footer>
  </div>
</template>

<script>
import { bindComputed } from "@okvue/vuex-bind";
export default {
  extends: {
    computed: bindComputed("multiplePage")
  },
  beforeRouteUpdate(to, from, next) {
    this.current = to.path;
    next();
  },
  methods: {
    filterIcon(item) {
      let src = item.icon;
      if (this.current && this.current.indexOf(item.route) === 0) {
        src = item.iconActive;
      }
      if (!src) {
        return {
          name: undefined,
          src: undefined
        };
      }
      switch (0) {
        case src.indexOf("src:"):
          return {
            name: "img",
            src: require(`@/${src.substr(4, src.length)}`)
          };
        case src.indexOf("uri:"):
          return {
            name: "img",
            src: src.substr(4, src.length)
          };
        case src.indexOf("icon:"):
        default:
          return {
            name: "span",
            icon: src.substr(5, src.length)
          };
      }
    }
  },
  data() {
    if (this.multiplePage) {
      const actived_page = this.multiplePage.filter(item => item.active) || {};
      this.current_route = actived_page.route || this.multiplePag[0].route;
    }
    return {
      current: this.current_route
    };
  }
};
</script>
<style lang="scss" scoped>
.mutiple-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  & > .main {
    display: flex;
    flex: 1;
  }
}
footer {
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;

  /* position: fixed;
  bottom: 0;
  left: 0;
  right: 0; */

  .icon {
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
  }
}
</style>

