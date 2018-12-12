/* eslint-disable-line no-unused-vars */
import {
  Actionsheet,
  Badge,
  Button,
  Cell,
  CellSwipe,
  Checklist,
  DatetimePicker,
  Field,
  Header,
  IndexList,
  IndexSection,
  Indicator,
  InfiniteScroll,
  Lazyload,
  Loadmore,
  MessageBox,
  Navbar,
  PaletteButton,
  Picker,
  Popup,
  Progress,
  Radio,
  Range,
  Search,
  Spinner,
  Swipe,
  SwipeItem,
  Switch,
  TabContainer,
  TabContainerItem,
  TabItem,
  Tabbar,
  Toast
} from "mint-ui";
import "mint-ui/lib/style.css";
// import view from "@okvue/view";
import Scroll from "@/components/scroll";
import WithTitle from "../layout/with-title";

export default {
  install: function(Vue) {
    Vue.component(Header.name, Header);
    Vue.component(Button.name, Button);
    Vue.component(WithTitle.name, WithTitle);
    Vue.use(Scroll);
    // Vue.use(view);
  }
};
