<template>
  <div class="with-title" @touchmove="touchMoveHandle">
    <div class="header">
      <div class="side">
        <router-link v-if="backButton" to="/" slot="left">
          <o-view>
            <o-icon name="arrow-left"/>
            <span>返回</span>
          </o-view>
        </router-link>
      </div>
      <span class="title">{{title}}</span>
      <div class="side">
        <dir v-if="actions">right</dir>
      </div>
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
      text-align: center;
      flex-grow: 1;
      flex-basis: 60%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 10px;
      padding-right: 10px;
    }
    .side {
      flex-grow: 0;
      flex-basis: 20%;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>
