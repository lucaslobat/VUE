import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriendForm from './components/NewFriendForm.vue'
const app = createApp(App);

app.component('FriendContact', FriendContact);
app.component('NewFriendForm', NewFriendForm)
app.mount('#app');
