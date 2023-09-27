import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const app = createApp(App);

const store = createStore({
  /* States */
  state: {
    isUserAuthenticated: false,
    todos: [
      { id: 1, text: "Learn Vue.js", done: true },
      { id: 2, text: "Go for a walk", done: false },
    ],
    counter: 0,
  },
  /* Mutations */
  mutations: {
    incrementByOne(state) {
      state.counter++;
    },
    increaseByTen(state, payload) {
      state.counter += payload.amount;
    },
    userAuthentication(state, payload) {
      state.isUserAuthenticated = payload.userAuthState;
    },
  },
  /* Getters */
  getters: {
    getCounter(state) {
      return state.counter;
    },
    getTodos(state) {
      return state.todos;
    },
    getDoneTodos(_, getters) {
      const allTodos = getters.getTodos;
      return allTodos.filter((todo) => todo.done);
    },
    getUserAuthState(state) {
      return state.isUserAuthenticated;
    },
  },
  /* Actions */
  actions: {
    asyncIncrementByOne({ commit }) {
      setTimeout(() => {
        commit("incrementByOne");
      }, 1000);
    },
    asyncIncreaseByTen({ commit }, payload) {
      setTimeout(() => {
        commit("increaseByTen", payload);
      }, 500);
    },
    userLogin({ commit }) {
      commit("userAuthentication", { userAuthState: true });
    },
    userLogoff({ commit }) {
      commit("userAuthentication", { userAuthState: false });
    },
  },
});

app.use(store);
app.mount("#app");
