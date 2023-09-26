<template>
  <base-container title="Vuex">
    <ul>
      <li v-for="todo in getDoneTodos">{{ todo.text }}</li>
    </ul>
    <h2>Counter <span>{{ getCounter }}</span></h2>
    <button @click="addOne"> Add 1</button>
    <IncrementByTenButton></IncrementByTenButton>
  </base-container>
</template>

<script>
import {mapGetters} from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import IncrementByTenButton from './components/IncrementByTenButton.vue';

export default {
  components: {
    BaseContainer,
    IncrementByTenButton
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
    ...mapGetters(['getCounter','getTodos','getDoneTodos'])
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