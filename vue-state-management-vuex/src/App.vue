<template>
  <base-container title="Vuex">
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
  methods: {
    addOne(){
      this.$store.commit('incrementByOne');
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter;
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