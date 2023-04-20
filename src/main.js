import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// icons
import { library } from "@fortawesome/fontawesome-svg-core";

// import { faBars } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faMagnifyingGlass, faBars, faXmark);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
