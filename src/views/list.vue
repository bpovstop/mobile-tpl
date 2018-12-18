<template>
  <with-title class="home" title="List moreeeeeeeeeeeeeeeeeeeeeeeeeeeee">
    <List :data="data" class="list">
      <!-- 列表表头 -->
      <template slot="head">
        <div class="demo"/>
      </template>
      <!-- 这里是stick组或data列表项(非stick时) -->
      <template slot="stick-title" slot-scope="{ data }">
        <div class="stick-title">
          <div>{{ data && data.datetime }}</div>
          <p>收入: {{ data && data.income }}, 支出: {{ data && data.pay }}</p>
        </div>
      </template>
      <template slot-scope="{ data }">
        <div class="group">
          <o-view ver hor="space-between" class="item" v-for="(item, i) in data" :key="i">
            <o-view>
              <div class="avatar"></div>
              <div>
                <h4>{{ item.name }}</h4>
                <span>{{ item.time }}</span>
              </div>
            </o-view>
            <h2>{{ item.pay }}</h2>
          </o-view>
        </div>
      </template>
      <!-- 自定义右侧index列表 -->
      <!-- <template slot="index" slot-scope="{ data }"/> -->
    </List>
  </with-title>
</template>

<script>
import List from "@/components/list/list";
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
    // const height = getComputedStyle(this.$el).height;
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
    const stickData = [
      {
        _group: { index: 0, datetime: "2018-12-17", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 1, datetime: "2018-12-16", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 2, datetime: "2018-12-15", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 3, datetime: "2018-12-14", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 4, datetime: "2018-12-13", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 5, datetime: "2018-12-12", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 6, datetime: "2018-12-11", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 7, datetime: "2018-12-10", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 8, datetime: "2018-12-09", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 9, datetime: "2018-12-08", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 10, datetime: "2018-12-07", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 11, datetime: "2018-12-06", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 12, datetime: "2018-12-05", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 13, datetime: "2018-12-04", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 14, datetime: "2018-12-03", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 15, datetime: "2018-12-02", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      },
      {
        _group: { index: 16, datetime: "2018-12-01", income: 20187, pay: 9392 },
        _value: [
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          },
          {
            name: "全家便利店",
            time: "昨天 21:49",
            pay: 42.5
          }
        ]
      }
    ];
    return {
      imageLoaded: false,
      data: stickData,
      file: null
    };
  }
};
</script>
<style lang="scss" scoped>
.demo {
  background-image: url(../assets/image/login.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 50px;
  background-position: left -14px;
}
.list {
  width: 100%;
  background-color: #f1f1f1;
}
.stick-title {
  background-color: #f1f1f1;
  padding: 10px;
  p {
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 4px;
    font-size: 12px;
  }
}
.group {
  .item {
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #e4e4e4;
    .avatar {
      width: 40px;
      height: 40px;
      background-color: #d2d2d2;
      border-radius: 20px;
      margin-right: 10px;
    }
    h4,
    h2 {
      margin: 0;
    }
    span {
      font-size: 12px;
    }
  }
}
</style>
