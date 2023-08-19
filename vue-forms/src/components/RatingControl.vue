<template>
  <div class="rating_buttons">
    <button @click="selectActiveButton('poor')" type="button">Poor</button>
    <button @click="selectActiveButton('average')" type="button">
      Average
    </button>
    <button @click="selectActiveButton('great')" type="button">Great</button>
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  data() {
    return {
      activeButton: this.modelValue,
    };
  },
  methods: {
    selectActiveButton(clickedButton) {
      this.activeButton = clickedButton;
      this.$emit('update:modelValue',clickedButton);
    },
  },
};
</script>

<style scoped>
.rating_buttons {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}

.rating_buttons button {
  border: 0.099rem solid gray;
  padding: 0.5rem 1rem;
  background-color: transparent;
  cursor: pointer;
}

.rating_buttons button:hover {
  background-color: gray;
  color: white;
}

.rating_buttons button:focus {
  background-color: gray;
  color: white;
}
</style>
