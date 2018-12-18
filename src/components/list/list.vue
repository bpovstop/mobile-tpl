<template>
  <o-scroll ref="scroll" @onScroll="onScrollHandle">
    <div>
      <slot name="head"/>
      <div v-if="data && data.length > 0 && isStick === false" v-for="(item, i) in data" :key="i">
        <slot v-bind:data="item"/>
      </div>
      <div
        v-if="data && data.length > 0 && isStick === true"
        v-for="(item, i) in data"
        :key="i"
        :title="item._group"
      >
        <div name="stick_title">
          <slot name="stick-title" v-bind:data="item._group"/>
        </div>
        <slot v-bind:data="item._value"/>
      </div>
    </div>
    <div class="index" ref="index" @touchstart="goTo" @touchmove.stop.prevent="goTo">
      <slot name="index" v-bind:data="index">
        <span
          v-if="index && index.length > 0"
          v-for="(item, i) in index"
          :data-index="i"
          :key="i"
        >{{ item }}</span>
      </slot>
    </div>
    <div class="stick" v-if="currentGroup" :style="{transform: `translateY(${titleTop}px)`}">
      <slot name="stick-title" v-bind:data="currentGroup"/>
    </div>
  </o-scroll>
</template>
<script>
import Scroll from "../scroll/scroll";

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
    this.body = {
      top: this.$el.offsetTop
    };
    this.updateItemTitleInfo();
    // this.initIndex();
  },
  data() {
    return {
      index: null,
      isStick: null,
      itemTitle: null,
      currentGroup: null,
      titleTop: 0
    };
  },
  watch: {
    data() {
      this.updateDataInfo(this.data);
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
        if (acc && _top < curr.offsetTop) {
          arr.splice(i);
          return i - 1;
        }
        return true;
      }, true);

      if (typeof current === 'number' && current > -1) {
        this.currentGroup = this.data[current]._group;
        const nextTitle = this.itemTitle[current + 1];
        const low = nextTitle.offsetTop - nextTitle.offsetHeight;

        if (_top < nextTitle.offsetTop && _top >= low) {
          this.titleTop = low - _top;
        } else {
          this.titleTop = 0;
        }
      } else {
        this.currentGroup = null;
      }
    },
    updateItemTitleInfo() {
      const item_title_collection = document.getElementsByName("stick_title");
      this.itemTitle = [...item_title_collection];
    },
    initIndex() {
      const _this = this;
      const idxs = [...this.$refs.index.children];
      idxs.map((idx, index) => {
        idx.addEventListener(
          "touchstart",
          e => {
            e.preventDefault();
            e.stopPropagation();
            goTo(index - 1);
          },
          false
        );
      });

      function goTo(index) {
        const crtTitleTop = _this.itemTitle[index].offsetTop;
        _this.$refs.scroll.goto(null, crtTitleTop);
      }
    },
    goTo(e) {
      const index = e.target.dataset.index;
      const crtTitleTop = this.itemTitle[index].offsetTop;
      this.$refs.scroll.goto(null, crtTitleTop);
    }
  },
  components: {
    [Scroll.name]: Scroll
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
.stick {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>
