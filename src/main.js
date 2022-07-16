import "amfe-flexible";
import "lib-flexible/flexible";
import {
  ActionBar,
  ActionBarButton,
  ActionBarIcon,
  AddressEdit,
  AddressList,
  Button,
  Card,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  ContactCard,
  Dialog,
  Divider,
  Field,
  Form,
  Icon,
  List,
  Loading,
  Overlay,
  Popup,
  PullRefresh,
  Skeleton,
  Stepper,
  SubmitBar,
  Swipe,
  SwipeCell,
  SwipeItem,
  Tab,
  Tabs,
  Toast,
} from "vant";
import "vant/lib/index.css"; // 全局引入样式
import {createApp} from "vue";
import App from "./App.vue";
import "./common/style/mixin.less";
import i18n from "./i18n/index";
import router from "./router";
import store from "./store";

const app = createApp(App); // 创建实例

// 全局过滤器
/*app.config.globalProperties.$filters = {
  prefix(url) {
    if (url && url.startsWith("http")) {
      return url;
    } else {
      url = `http://backend-api-01.newbee.ltd${url}`;
      return url;
    }
  },
};*/

app.use(i18n).
    use(ActionBarButton).
    use(ActionBarIcon).
    use(ActionBar).
    use(Divider).
    use(Popup).
    use(Overlay).
    use(Loading).
    use(Dialog).
    use(Toast).
    use(ContactCard).
    use(Form).
    use(AddressEdit).
    use(AddressList).
    use(Field).
    use(CellGroup).
    use(Cell).
    use(SwipeCell).
    use(Icon).
    use(Stepper).
    use(Card).
    use(Button).
    use(Swipe).
    use(SwipeItem).
    use(PullRefresh).
    use(List).
    use(Tab).
    use(Tabs).
    use(SubmitBar).
    use(Checkbox).
    use(CheckboxGroup).
    use(Skeleton);

app.use(router);
app.use(store);

app.mount("#app");
