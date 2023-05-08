import { createApp } from "vue";
import App from "./App.vue";

import axios from "axios";

import "@/assets/css/main.css";

const app = createApp(App);

axios.defaults.timeout = 10000;

app.provide("$axios", axios);

app.mount("#app");
