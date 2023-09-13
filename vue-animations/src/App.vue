<template>
  <div class="container">
    <UsersList></UsersList>
  </div>


  <div class="container">
    <div class="block" :class="{ transform: isTransforming }"></div>
    <button @click="startTransformation">Animate</button>
  </div>



  <div class="container">
    <Transition name="paragraph" @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave">
      <p v-if="isParagraphVisible">This paragraph is controlled
        by the Transition element</p>
    </Transition>
    <button @click="toggleParagraph">Toggle paragraph</button>
  </div>


  <div class="container">
    <!-- Modal -->
    <!-- Passes two elements to baseModal's slot and pass the variable "dialogIsVisible" to baseModal to control
        its rendering-->
    <base-modal :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close</button>
    </base-modal>
    <button @click="showDialog">Show Dialog</button>
  </div>

  <div class="container">
    <Transition name="fadeButtons" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show users</button>
      <button @click="hideUsers" v-else>Hide users</button>
    </Transition>
  </div>
</template>  

<script>
import UsersList from './components/UsersList.vue';

export default {
  components: { UsersList },
  data() {
    return {
      dialogIsVisible: false,
      isTransforming: false,
      isParagraphVisible: false,
      usersAreVisible: false
    };
  },
  methods: {
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    startTransformation() {
      this.isTransforming = true;
    },
    toggleParagraph() {
      this.isParagraphVisible = !this.isParagraphVisible;
    },
    onBeforeEnter(targetElement) {
      console.log("Before enter:", targetElement);
    },
    onEnter(targetElement) {
      console.log("Enter:", targetElement);
    },
    onAfterEnter(targetElement) {
      console.log("After enter:", targetElement);
    },
    onBeforeLeave(targetElement) {
      console.log("Before leave:", targetElement);
    },
    onLeave(targetElement) {
      console.log("Leave:", targetElement);
    },
    onAfterLeave(targetElement) {
      console.log("After leave:", targetElement);
    }
  },
  components: { UsersList }
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

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.fadeButtons-enter-from,
.fadeButtons-leave-to {
  opacity: 0.3
}

.fadeButtons-enter-active {
  transition: opacity 0.2s ease-out;
}

.fadeButtons-leave-active {
  transition: opacity 0.2s ease-in;
}

.fadeButtons-enter-to,
.fadeButtons-leave-from {
  opacity: 1
}
</style>