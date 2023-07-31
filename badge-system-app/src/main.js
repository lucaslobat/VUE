import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import WrapperCard from './components/slots/WrapperCard.vue';


const app = createApp(App);

// Global component
app.component('BaseBadge', BaseBadge);
app.component('WrapperCard',WrapperCard);
app.mount('#app');
