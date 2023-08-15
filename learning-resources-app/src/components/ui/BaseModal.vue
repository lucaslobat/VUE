<template>
  <teleport to="body">
    <dialog ref="dialog">
      <div class="modal-content">
        <button class="close" id="closeModalBtn" @click="closeModal">
          &times;
        </button>
        <h2><slot name="modalHeader">Modal header</slot></h2>
        <p>
          <slot name="modalBody"
            >This is a simple modern modal using the &lt;dialog&gt;
            element.</slot
          >
        </p>
      </div>
    </dialog>
  </teleport>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$refs.dialog.showModal();
    },
    closeModal() {
      this.$refs.dialog.close();
      this.$emit("toggle-valid");
    },
  },
  mounted() {
    this.showModal();
  },
};
</script>

<style scoped>
dialog {
  margin: auto;
  background-color: #fefefe;
  padding: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-style: none;
  z-index: 10;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.4);
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  border: none;
  background: none;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
}
</style>
