import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import App from './App.vue';
import router from './router';
import './style/base.scss';
import './style.css';
import 'vue3-toastify/dist/index.css';
const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router).use(Vue3Toasity, {
  autoClose: 3000,
  style: {},
  hideProgressBar: true
} as ToastContainerOptions)
.mount('#app');

