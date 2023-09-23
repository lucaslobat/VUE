import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const app = createApp(App);

const store = createStore({
  state: {
      counter: 0,
  },
  mutations: {
    incrementByOne(state) {
      state.counter++;
    },
    increaseByOne(state, payload){
      state.counter += payload.amount;
    }
  },
});

app.use(store);
app.mount("#app");
