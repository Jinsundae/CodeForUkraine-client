import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios';


axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';

const app = createApp(App)
app.config.globalProperties.axios = axios;
app.use(router).mount('#app');