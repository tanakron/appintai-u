import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(require("vue-moment"));
Vue.config.productionTip = false;
const axios = require("axios").default;
new Vue({
  axios,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
