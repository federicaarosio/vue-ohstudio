import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router.js";

createApp(App).use(router).mount('#app')
