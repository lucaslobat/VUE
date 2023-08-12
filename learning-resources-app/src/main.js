import { createApp } from 'vue'
import App from './App.vue'
import BaseContainer from './components/ui/BaseContainer.vue'
import BaseButton from './components/ui/BaseButton.vue'

const app = createApp(App);

//Global components
app.component('BaseContainer',BaseContainer);
app.component('BaseButton',BaseButton);
app.mount('#app');
