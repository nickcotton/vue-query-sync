import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import QuerySynchronizer from "@oarepo/vue-query-synchronizer";

const app = createApp(App);

app.use(router);
app.use(QuerySynchronizer, { router, debug: true });

app.mount("#app");
