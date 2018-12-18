<template>
  <div class="with-title" @touchmove="touchMoveHandle">
    <div class="header">
      <router-link class="side" to="/" slot="left">
        <o-view hor ver>
          <o-icon name="arrow-left"/>
          <span>返回</span>
        </o-view>
      </router-link>
      <span class="title">{{title}}</span>
      <div class="side">right</div>
    </div>
    <div class="container">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  name: "with-title",
  props: {
    title: null,
    backButton: {
      type: Object | String | Boolean,
      default: true
    },
    actions: {
      type: Object | Boolean,
      default: false
    }
  },
  methods: {
    touchMoveHandle(e) {
      // console.log(e, e.touches[0].pageY)
    }
  }
};
</script>

<style lang="scss" scoped>
.with-title {
  .container {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 52px;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    min-height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    z-index: 1;
    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 10px;
      padding-right: 10px;
    }
    .side {
      white-space: nowrap;
    }
  }
}
</style>
