import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify/lib";
import App from "./App.vue";
import router from "./plugins/router";
import vuetify from "./plugins/vuetify";
import { Ripple } from "vuetify/lib/directives";

Vue.use(VueRouter);
Vue.use(Vuetify, { directives: { Ripple } });

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
