import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import modal from "./plugins/modalWindows";

Vue.config.productionTip = false;
Vue.use(modal);

new Vue({
  render: (h) => h(App),
  store,
  router,
  modal,
}).$mount("#app");
