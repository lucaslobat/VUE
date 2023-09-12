import { createApp } from 'vue';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import UsersList from './components/UsersList.vue';

const app = createApp(App);

app.component('base-modal', BaseModal);

app.mount('#app');
