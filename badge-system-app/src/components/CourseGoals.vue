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
        <label>Enter a new goal:</label> <input type="text" ref="newGoal" />
        <button @click="saveGoal">Save goal</button>
      </div>
    </template>
  </WrapperCard>
  <Modal @show-modal="saveGoal" v-if="isInputInvalid">
    <template #title>
      <h2>Invalid input</h2>
    </template>
    <template #body>
      <p>Please, enter a valid input</p>
    </template>
  </Modal>
</template>

<script>
import WrapperCard from "./slots/WrapperCard.vue";
import Modal from "./slots/Modal.vue";

export default {
  components: { WrapperCard, Modal },

  data() {
    return {
      isInputInvalid: false,
      goals: ["Master Vue.js", "Improve logical reasoning"],
    };
  },

  methods: {
    saveGoal(dialog) {
      const newGoal = this.$refs.newGoal.value;
      if (newGoal === "") {
        this.isInputInvalid = true;
        dialog.showModal()
      }
    },
  },
};
</script>
