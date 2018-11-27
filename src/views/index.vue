<template>
  <with-title class="home">
    <div class="bg">
      <img src="@/assets/image/bcImg.svg" alt>
    </div>
  </with-title>
</template>

<script>
export default {
  name: "home"
};
</script>
<style lang="scss" scoped>
.home {
  .bg{
    background: linear-gradient(to bottom, );
    height: 4000px;
  }
  :global(img) {
    width: 100%;
  }
}
</style>
