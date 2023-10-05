import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const app = createApp(App);

/* Modules */
/* Counter module */
const counterModule = {
  namespaced: true,
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
  namespaced: true,
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

/* User authentication module */
const userAuth = {
  namespaced: true,
  state: {
    isUserAuthenticated: false,
  },
  mutations: {
    userAuthentication(state, payload) {
      state.isUserAuthenticated = payload.userAuthState;
    },
  },
  getters: {
    getTodoState(state, getters, rootState) {
      return rootState.todoModule.todos;
    },
    getUserAuthState(state, getters, rootState) {
      return state.isUserAuthenticated;
    },
  },
  actions: {
    userLogin({ state, commit, rootState }) {
      commit("userAuthentication", { userAuthState: true });
    },
    userLogoff({ state, commit, rootState }) {
      commit("userAuthentication", { userAuthState: false });
    },
  },
};

const store = createStore({
  modules: {
    counterModule: counterModule,
    todoModule: todoModule,
    userAuth: userAuth,
  },
});

app.use(store);
app.mount("#app");
