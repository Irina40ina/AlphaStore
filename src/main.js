import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "@/styles/main.css";
import '@/styles/media/index.css';

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as vuetifyDirectives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

import directives from "./directives/";

const vuetify = createVuetify({
  components,
  directives: vuetifyDirectives,
});

const app = createApp(App);

directives.forEach((el) => {
  app.directive(el.name, el);
});

app.use(createPinia());
app.use(vuetify);
app.use(router);
app.mount("#app");
