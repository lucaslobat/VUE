import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';


const app = createApp(App);

// Global component
app.component('BaseBadge', BaseBadge);
app.mount('#app');
