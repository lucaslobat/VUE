import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'

const app = createApp(App);

//Global components
app.component('BaseCard',BaseCard);
app.component('BaseButton',BaseButton);
app.mount('#app');
