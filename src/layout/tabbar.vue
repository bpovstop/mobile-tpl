<template>
  <o-view ver hor="space-around" class="tabbar">
    <o-view
      hor
      ver
      :column="iconOnTop ? 'column' : 'row'"
      v-for="item in app.mutiple"
      :key="item.name"
      @click.native="clickHandle(item.route)"
    >
      <component
        v-if="isIconComponet(item)"
        :is="active === item.route ? item.icon : item.iconActive"
      />
      <o-icon
        class="icon"
        :name="active === item.route ? item.icon : item.iconActive"
        v-if="!isIconComponet(item)"
      />
      <span v-if="showText">{{ item.name }}</span>
    </o-view>
  </o-view>
</template>
<script>
export default {
  name: "o-tabbar",
  props: {
    showIcon: {
      type: Boolean,
      default: true
    },
    showText: {
      type: Boolean,
      default: true
    },
    iconOnTop: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    clickHandle(path) {
      console.log(path);
      this.$router.push({ path });
    },
    isIconComponet(info) {
      if (this.active === info.route) {
        return typeof info.iconActive !== "string";
      }
      if (this.active !== info.route) {
        return typeof info.icon !== "string";
      }
    }
  },
  watch: {
    $route: function(to) {
      this.active = to.path;
    }
  },
  data() {
    return {
      active: this.$route.path
    };
  }
};
</script>
<style lang="scss" scoped>
.tabbar {
  z-index: 10;
  height: 52px;
  background-color: #fff;
  span {
    color: var(--color-font);
  }
  .icon {
    width: 28px;
    height: 28px;
  }
}
</style>
