<template>
  <WrapperCard>
    <template #header>
      <h2>Course goals</h2>
    </template>
    <template #main>
      <ul>
        <li v-for="goal in goals">
          <slot :item="goal">{{ goal }}</slot>
        </li>
      </ul>
      <div>
        <label>Enter a new goal:</label> <input type="text" ref="enteredGoal" />
        <button @click="saveGoal">Save goal</button>
      </div>
    </template>
  </WrapperCard>

  <teleport to="body">
    <Modal v-if="isInputValid === false">
      <template #title >
        <h2>Invalid input</h2>
      </template>
      <template #body>
        <p>Please enter a valid input</p>
        <button @click="confirmError">Ok</button>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import WrapperCard from "./slots/WrapperCard.vue";
import Modal from "./slots/Modal.vue";

export default {
  components: { WrapperCard, Modal },

  data() {
    return {
      isInputValid: true,
      goals: ["Master Vue.js", "Improve logical reasoning"],
    };
  },

  methods: {
    saveGoal() {
      const enteredGoal = this.$refs.enteredGoal.value;
      if (enteredGoal === "") {
        this.isInputValid = false;
      }
    },
    confirmError() {
      this.isInputValid = true;
    },
  },
};
</script>
