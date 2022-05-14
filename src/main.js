import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import components from "./components";
import layouts from "./layouts";
import widgets from "./widgets";

const app = createApp(App);

layouts.forEach((l) => app.component(l.name, l));
components.forEach((c) => app.component(c.name, c));
widgets.forEach((w) => app.component(w.name, w));

app.use(router);
app.use(store);

store.dispatch("auth/actLoadFromStore");

app.mount("#app");
