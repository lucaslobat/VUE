<template>
  <dialog ref="dialog" class="modal">
    <div class="modal-content">
      <slot name="title"> </slot>

      <slot name="body">
      </slot>

      <slot name="button">
      </slot>
    </div>
  </dialog>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$refs.dialog.showModal();
    },
    closeModal() {
      this.$refs.dialog.close();
      this.$emit('toggle-valid');
    },
  },
  mounted() {
    this.showModal();
  },
};
</script>

<style>
.modal {
  padding: 2rem;
  border-radius: 0.25rem;
  z-index: 10;
  max-width: 20%;
  border-style: none;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
