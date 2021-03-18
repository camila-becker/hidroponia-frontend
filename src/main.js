import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueSweetalert2 from "vue-sweetalert2";
import VueTheMask from "vue-the-mask";
import router from "./router";

import "sweetalert2/dist/sweetalert2.min.css";

Vue.config.productionTip = false;

Vue.use(VueSweetalert2);
Vue.use(VueTheMask);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
