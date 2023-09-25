<template>
  <base-container title="Vuex">
    <ul>
      <li v-for="todo in doneTodos">{{ todo.text }}</li>
    </ul>
    <h2>Counter <span>{{ counter }}</span></h2>
    <button @click="addOne"> Add 1</button>
    <IncrementByOneButton></IncrementByOneButton>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import IncrementByOneButton from './components/IncrementByOneButton.vue';

export default {
  components: {
    BaseContainer,
    IncrementByOneButton
  },
  /*   data() {
      return { todos: this.$store.state.todos }
  
    }, */
  methods: {
    addOne() {
      this.$store.dispatch('asyncIncrementByOne');
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    doneTodos() {
      return this.$store.getters.doneTodos;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>