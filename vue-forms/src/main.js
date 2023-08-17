import { createApp } from 'vue';

import App from './App.vue';
import TheForm from './components/TheForm.vue';

const app = createApp(App);
app.component('TheForm',TheForm);

app.mount('#app')
