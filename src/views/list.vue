<template>
  <with-title class="demo">
    list
  </with-title>
</template>
<script>
// import ScrollExtra from "@/lib/scroll-extra";
export default {
  name: "list",
  mounted() {
    // this.scroll = new ScrollExtra(this.$refs.demo);
  }
};
</script>

<style lang="scss" scoped>
.demo {
  padding-top: 40px;
  .test {
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
      background-color: transparent;
      height: 0;
      width: 0;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
}
</style>

