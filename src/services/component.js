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

import WithTitle from "../layout/with-title";

export default function componentService(Vue) {
  Vue.component(Header.name, Header);
  Vue.component(Button.name, Button);
  Vue.component(WithTitle.name, WithTitle);
}
