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
  methods:{
    touchMoveHandle(){
      console.log('move')
    }
  }
};
</script>

<style lang="scss" scoped>
.with-title {
  width: 100%;
  height: 100%;
  padding-top: 40px;
  .container {
    -webkit-overflow-scrolling: touch;
    height: 100%;
    overflow: auto;
  }
  :global(.head) {
    :global(h1) {
      font-size: 19px;
    }
  }
}
</style>


