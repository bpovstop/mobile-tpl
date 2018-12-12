<template>
  <with-title class="home">
    <List :data="data">
      <!-- 列表表头 -->
      <template slot="head">
        <div>this is head{{$store.getters.get_file_status}}</div>
        <input type="file" @change="changeHandle">
        <button @click="clickHandle">fetch test</button>
        <a href="http://localhost:5055/get/excel" download>download</a>
      </template>
      <!-- 这里是stick组或data列表项(非stick时) -->
      <template slot="stick-title" slot-scope="{ data }">
        <div>{{data}}</div>
      </template>
      <template slot-scope="{ data }">
        <div class="item" v-for="(item, i) in data" :key="i">{{item.label}}</div>
      </template>
      <!-- 自定义右侧index列表 -->
      <template slot="index" slot-scope="{ data }">
        <span v-for="(item, i) in data" :key="i">{{item}}</span>
      </template>
    </List>
  </with-title>
</template>

<script>
import List from "@/components/list/list";
import fetch2 from "@/lib/vue-fetch/index2";
export default {
  name: "home",
  components: {
    List
  },
  beforeCreate() {},
  created() {
    // this.$vf.registerVuex({
    //   baidu: {
    //     bding: "bding/path"
    //   },
    //   google: {
    //     gging: "gging/path"
    //   }
    // });
  },
  mounted() {
    const height = getComputedStyle(this.$el).height;
  },
  watch: {},
  methods: {
    clickHandle() {
      this.$vf
        .setHeaders({ "File-Name": "custom-file-name.txt" })
        .download("excel", { filename: "custom-file-name.xlsx" });
    },
    changeHandle(e) {
      this.file = e.target.files[0];
    }
  },
  data() {
    const data = [
      { index: 0, label: "Sometimes you just need a little help" },
      { index: 1, label: "Sometimes you just need a little help" },
      { index: 2, label: "Sometimes you just need a little help" },
      { index: 3, label: "Sometimes you just need a little help" },
      { index: 4, label: "Sometimes you just need a little help" },
      { index: 5, label: "Sometimes you just need a little help" },
      { index: 6, label: "Sometimes you just need a little help" },
      { index: 7, label: "Sometimes you just need a little help" },
      { index: 8, label: "Sometimes you just need a little help" },
      { index: 9, label: "Sometimes you just need a little help" },
      { index: 10, label: "Sometimes you just need a little help" },
      { index: 11, label: "Sometimes you just need a little help" },
      { index: 12, label: "Sometimes you just need a little help" },
      { index: 13, label: "Sometimes you just need a little help" },
      { index: 14, label: "Sometimes you just need a little help" },
      { index: 15, label: "Sometimes you just need a little help" },
      { index: 16, label: "Sometimes you just need a little help" }
    ];
    const stickData = [
      {
        _group: 0,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 1,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 2,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 3,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 4,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 5,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 6,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 7,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 8,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 9,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 10,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 11,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 12,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 13,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 14,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 15,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      },
      {
        _group: 16,
        _value: [
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" },
          { label: "Sometimes you just need a little help" }
        ]
      }
    ];
    return {
      imageLoaded: false,
      data: stickData,
      file: null
    };
  },
  watch: {
    imageLoaded() {}
  }
};
</script>
<style lang="scss" scoped>
.scroll {
  height: 100%;
}
.home {
  .bg {
    background: linear-gradient(to bottom);
    background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543711536894&di=ae1beb0cffeb5a05e88e0d5a2aade6ff&imgtype=0&src=http%3A%2F%2Fimage4.xyzs.com%2Fupload%2Fff%2Fee%2F1126%2F20150506%2F143088212130425_0.jpg);
    position: relative;
    /* height: 200vh; */
    /* overflow: hidden; */
    h1 {
      margin-top: 0;
      /* test snap */
      height: 80px;
    }
  }
  .item {
    height: 80px;
    background-color: green;
    margin-bottom: 10px;
  }
  :global(.img) {
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-color: green;
    /* background-image: url(../assets/image/bcImg.svg); */
    background-repeat: repeat-y;
  }
}
</style>
