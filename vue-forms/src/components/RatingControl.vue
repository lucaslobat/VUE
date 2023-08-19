<template>
  <div class="rating_buttons">
    <button
      :class="{ active: activeButton === 'poor' }"
      class="rating_button"
      @click="selectActiveButton('poor')"
      type="button"
    >
      Poor
    </button>
    <button
      :class="{ active: activeButton === 'average' }"
      class="rating_button"
      @click="selectActiveButton('average')"
      type="button"
    >
      Average
    </button>
    <button
      :class="{ active: activeButton === 'great' }"
      class="rating_button"
      @click="selectActiveButton('great')"
      type="button"
    >
      Great
    </button>
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
      this.$emit("update:modelValue", clickedButton);
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

.rating_button {
  border: 0.099rem solid gray;
  padding: 0.5rem 1rem;
  background-color: transparent;
  cursor: pointer;
}

.rating_button:hover {
  background-color: gray;
  color: white;
} 

.active {
  background-color: gray;
  color: white;
}
</style>
