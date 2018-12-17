<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>
<script>
export default {
  name: "o-icon",
  props: {
    name: String
  }
};
</script>
<style lang="scss" scoped>
.icon {
  width: 1rem;
  height: 1rem;
  overflow: hidden;
}
</style>
