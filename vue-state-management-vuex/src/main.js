import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const app = createApp(App);

const store = createStore({
  state: {
    todos: [
      { id: 1, text: "Learn Vue.js", done: true },
      { id: 2, text: "Go for a walk", done: false },
    ],
    counter: 0,
  },
  mutations: {
    incrementByOne(state) {
      state.counter++;
    },
    increaseByOne(state, payload) {
      state.counter += payload.amount;
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    doneTodos(_, getters) {
      const allTodos = getters.getTodos;
      return allTodos.filter((todo) => todo.done);
    },
  },
});

app.use(store);
app.mount("#app");
