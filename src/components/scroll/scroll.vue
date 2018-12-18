<template>
  <div class="scroll">
    <slot/>
  </div>
</template>
<script>
import "@/lib/scroll/scroll";
import Scroll from "@/lib/scroll";
export default {
  name: "o-scroll",
  props: {
    bounce: {
      type: Object | Boolean,
      default: true
    }
  },
  mounted() {
    this.scroll = new Scroll(this.$el, {
      bounce: this.bounce,
      snap: false,
      snapStepY: true,
      probeType: 3
    });
    this.scroll.on("scroll", () => {
      this.$emit("onScroll", { x: this.scroll._x, y: this.scroll._y });
    });
    setTimeout(() => {
      this.scroll.refresh();
    }, 2000);
  },
  methods: {
    goto(x, y) {
      this.scroll.scrollTo(x, -y, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll {
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>
