<template>
  <BaseContainer title="Vuex" v-if="getUserAuthState">
    <ul>
      <li v-for="todo in getDoneTodos">{{ todo.text }}</li>
    </ul>
    <h2>Counter <span>{{ getCounter }}</span></h2>
    <button @click="addOne"> Add 1</button>
    <IncrementByTenButton></IncrementByTenButton>
  </BaseContainer>

  <BaseContainer title="Using rootState" v-if="getUserAuthState">
    <p>{{ getTodoState }}</p>
  </BaseContainer>

  <BaseContainer title="Authentication">
    <UserAuthentication></UserAuthentication>
  </BaseContainer>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import IncrementByTenButton from './components/IncrementByTenButton.vue';
import UserAuthentication from './components/UserAuthentication.vue'

export default {
  components: {
    BaseContainer,
    IncrementByTenButton,
    UserAuthentication
  },
  /*   data() {
      return { todos: this.$store.state.todos }
  
    }, */
  methods: {
    addOne() {
      this.$store.dispatch('counterModule/asyncIncrementByOne');
    }
  },
  computed: {
    ...mapGetters('userAuth', ['getUserAuthState', 'getTodoState']),
    ...mapGetters('todoModule', ['getDoneTodos']),
    ...mapGetters('counterModule', ['getCounter'])
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