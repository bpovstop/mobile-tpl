<template>
  <div class="with-title" @touchmove="touchMoveHandle">
    <mt-header class="head" fixed title="固定在顶部">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="container">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  name: "with-title",
  props: {
    title: "",
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
  height: 100%;
  overflow: hidden;
  .container {
    padding-top: 40px;
    height: 100%;
    width: 100%;
  }
  :global(.head) {
    :global(h1) {
      font-size: 19px;
    }
  }
}
</style>


