import { createApp } from 'vue'
import App from './App.vue'
import FriendContactCard from './components/FriendContactCard.vue'

const app = createApp(App);
app.component('friend-contact-card',FriendContactCard);
app.mount('#app');

