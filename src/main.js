import { createApp } from 'vue'
import App from './App.vue'
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import router from './router';

const app = createApp(App);
app.use(router);
app.component('VueCal', VueCal);
app.mount('#app');