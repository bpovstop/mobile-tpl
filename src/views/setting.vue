<template>
  <div>
    <div class="blur-head">blur head</div>
    <div>mutiple page setting</div>
  </div>
</template>
<script>
import { bindComputed } from "@okvue/vuex-bind";
export default {
  name: "setting",
  extends: {
    computed: bindComputed("multiplePage")
  },
  data() {
    return {};
  }
};
</script>
