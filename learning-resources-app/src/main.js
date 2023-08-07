import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/ui/BaseCard.vue'

const app = createApp(App);

//Global components
app.component('BaseCard',BaseCard);
app.mount('#app');
