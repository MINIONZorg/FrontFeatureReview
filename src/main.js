import { createApp } from 'vue'
import App from './App.vue'
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import router from './router';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAFtUvWO4_Ww4PFQE-hlEsu9YqpsPUumrY",
    authDomain: "minionz-604e7.firebaseapp.com",
    projectId: "minionz-604e7",
    storageBucket: "minionz-604e7.appspot.com",
    messagingSenderId: "279178315744",
    appId: "1:279178315744:web:fa584f8247b9f22b084d85",
    measurementId: "G-M3KETQY06L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const vueApp = createApp(App);
vueApp.use(router);
vueApp.provide('analytics', analytics);
vueApp.provide('db', db);
vueApp.component('VueCal', VueCal);
vueApp.mount('#app');