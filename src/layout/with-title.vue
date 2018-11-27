<template>
  <div class="with-title">
    <mt-header fixed title="固定在顶部">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <slot/>
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
  }
};
</script>

<style lang="scss" scoped>
.with-title {
  width: 100%;
  height: 100%;
}
</style>


