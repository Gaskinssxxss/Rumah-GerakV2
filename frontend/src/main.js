import { createApp } from "vue";
import App from "./App.vue";

import router from "./services/router";
import store from "./services/store";
import "./style.css";

import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import Vue3Marquee from "vue3-marquee";

import VueGoogleMaps from "@fawmi/vue-google-maps";

import Vue3VideoPlayer from "@cloudgeek/vue3-video-player";
import "@cloudgeek/vue3-video-player/dist/vue3-video-player.css";

import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

app.config.errorHandler = (err) => {
  if (
    err.message.includes(
      "Cannot read properties of null (reading 'insertBefore')"
    )
  ) {
    console.warn("Error 'insertBefore' disembunyikan:", err);
  } else {
    console.error(err);
  }
};

app
  .use(router)
  .use(VueToast)
  .use(Vue3Marquee)
  .use(store)
  .use(MotionPlugin)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyAT4zmWT5vLpBlmwwFXVD-gXxGVgR4caSc",
      libraries: "places,visualization",
      v: "weekly",
    },
  })
  .use(Vue3VideoPlayer, {
    lang: "zh-CN",
  })
  .mount("#app");

// import { createApp } from "vue";
// import App from "./App.vue";

// import router from "./services/router";
// import store from "./services/store";
// import "./style.css";

// import VueToast from "vue-toast-notification";
// import "vue-toast-notification/dist/theme-sugar.css";

// import Vue3Marquee from "vue3-marquee";

// import VueGoogleMaps from "@fawmi/vue-google-maps";

// import Vue3VideoPlayer from "@cloudgeek/vue3-video-player";
// import "@cloudgeek/vue3-video-player/dist/vue3-video-player.css";

// import { MotionPlugin } from "@vueuse/motion";

// createApp(App)
//   .use(router)
//   .use(VueToast)
//   .use(Vue3Marquee)
//   .use(store)
//   .use(MotionPlugin)
//   .use(VueGoogleMaps, {
//     load: {
//       key: "AIzaSyBmvubCaHldEux2HCbbDx5NqCFiKmJWHJM",
//       libraries: "places",
//     },
//   })
//   .use(Vue3VideoPlayer, {
//     lang: "zh-CN",
//   })
//   .mount("#app");
