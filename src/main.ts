import { createSSRApp } from "vue";
import App from "./App.vue";
import "uno.css";
import store from "./store";

export function createApp() {
  const app = createSSRApp(App);
  app.use(store); // 注册Pinia

  return {
    app,
  };
}
