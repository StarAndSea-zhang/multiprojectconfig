import Vue from "vue";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import { Button, Layout, Tabs } from "ant-design-vue";
Vue.use(Button);
Vue.use(Layout);
Vue.use(Tabs);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
