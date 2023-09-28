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
  state:{

  },
  getters:{

  },
  mutations:{

  },
  actions:{
    
  }
}

const store = createStore({
  modules: { counterModule: counterModule },
  /* States */
  state: {
    isUserAuthenticated: false,
    todos: [
      { id: 1, text: "Learn Vue.js", done: true },
      { id: 2, text: "Go for a walk", done: false },
    ],
  },
  /* Mutations */
  mutations: {
    userAuthentication(state, payload) {
      state.isUserAuthenticated = payload.userAuthState;
    },
  },
  /* Getters */
  getters: {
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
