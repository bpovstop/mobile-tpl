<template>
  <o-scroll @onScroll="onScrollHandle">
    <div>
      <slot name="head"/>
      <div v-if="data && data.length > 0 && isStick === false" v-for="(item, i) in data" :key="i">
        <slot v-bind:data="item"/>
      </div>
      <o-stick-group
        v-if="data && data.length > 0 && isStick === true"
        v-for="(item, i) in data"
        :key="i"
        :title="item._group"
      >
        <div name="stick_title">
          <slot name="stick-title" v-bind:data="item._group"/>
        </div>
        <slot v-bind:data="item._value"/>
      </o-stick-group>
    </div>
    <div class="index">
      <slot name="index" v-bind:data="index">
        <span v-if="index && index.length > 0" v-for="(item, i) in index" :key="i">{{item}}</span>
      </slot>
    </div>
  </o-scroll>
</template>
<script>
import Scroll from "../scroll/scroll";
import stickGroup from "./stick-group";
export default {
  name: "o-list",
  props: {
    pullRefresh: {
      type: Boolean,
      default: true
    },
    pushLoad: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  created() {
    this.updateDataInfo(this.data);
  },
  mounted() {
    this.updateItemTitleInfo();
  },
  data() {
    return {
      index: null,
      isStick: null,
      itemTitle: null
    };
  },
  watch: {
    data() {
      this.updateDataInfo(this.data);
      this.$nextTick(() => {
        console.log("next tick update");
      });
    }
  },
  methods: {
    updateDataInfo(data) {
      if (!Array.isArray(data)) return {};
      let stick = false;
      const _index = data.map(item => {
        if (item._group || item._group === 0) {
          if (!stick) stick = true;
          if (
            typeof item._group === "string" ||
            typeof item._group === "number"
          ) {
            return item._group;
          }
          if (item._group.index) {
            return item._group.index;
          }
        }
        if (item.index) {
          return item.index;
        }
      });

      this.isStick = stick;
      this.index = _index.reduce((p, i) => typeof i !== "undefined", false)
        ? _index
        : null;
    },
    onScrollHandle(pos) {
      const _top = Math.round(Math.abs(pos.y));
      const current = this.itemTitle.slice(0).reduce((acc, curr, i, arr) => {
        if (acc && curr.offsetTop < _top){
          arr.splice(1)
          return arr[i - 1]
        }
        return true;
      }, true);
      console.log(current)
    },
    updateItemTitleInfo() {
      const item_title_collection = document.getElementsByName("stick_title");
      this.itemTitle = [...item_title_collection];
    }
  },
  components: {
    [Scroll.name]: Scroll,
    [stickGroup.name]: stickGroup
  }
};
</script>
<style lang="scss" scoped>
.index {
  position: fixed;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  & > :global(span) {
    display: block;
  }
}
</style>

