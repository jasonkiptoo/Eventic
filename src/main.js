import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// icons
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faHeart,
  faLightbulb,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/pro-regular-svg-icons";

library.add(faBars, faMagnifyingGlass, faBars, faXmark, faHeart, faLightbulb);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
