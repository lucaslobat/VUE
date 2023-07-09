import { createApp } from 'vue';
import App from './App.vue';
import FriendContactCard from './components/FriendContactCard.vue';
import NewFriendForm from "./components/NewFriendForm.vue";

const app = createApp(App);
app.component('friend-contact-card',FriendContactCard);
app.component('new-friend-form',NewFriendForm);
app.mount('#app');

