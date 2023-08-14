import { createApp } from 'vue'
import App from './App.vue'
import BaseContainer from './components/ui/BaseContainer.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseModal from './components/ui/BaseModal.vue'

const app = createApp(App);

//Global components
app.component('BaseContainer',BaseContainer);
app.component('BaseButton',BaseButton);
app.component('BaseModal',BaseModal)
app.mount('#app');
