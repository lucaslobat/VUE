import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const app = createApp(App);

/* Modules */
/* Counter module */
const counterModule = {
  state: {
    counter: 0,
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
  },
  mutations: {
    incrementByOne(state) {
      state.counter++;
    },
    increaseByTen(state, payload) {
      state.counter += payload.amount;
    },
  },
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
  },
};

/* Todo module */
const todoModule = {
  state: {
    todos: [
      { id: 1, text: "Learn Vue.js", done: true },
      { id: 2, text: "Go for a walk", done: false },
    ],
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getDoneTodos(_, getters) {
      const allTodos = getters.getTodos;
      return allTodos.filter((todo) => todo.done);
    },
  },
};

const store = createStore({
  modules: { counterModule: counterModule, todoModule: todoModule },
  /* States */
  state: {
    isUserAuthenticated: false,
  },
  /* Mutations */
  mutations: {
    userAuthentication(state, payload) {
      state.isUserAuthenticated = payload.userAuthState;
    },
  },
  /* Getters */
  getters: {
    getUserAuthState(state) {
      return state.isUserAuthenticated;
    },
  },
  /* Actions */
  actions: {
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
