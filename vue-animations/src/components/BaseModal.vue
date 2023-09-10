<template>
  <!-- This div adds a backdrop when the modal is open -->
  <div v-if="open" class="backdrop"></div>

  <!-- Transition element added to only animate the dialog element -->
  <Transition name="modal">
    <dialog open v-if="open">
      <!-- Emits the event "close" to the parent component whenever any element inside of "slot" get clicked -->
      <slot></slot>
    </dialog>
  </Transition>
</template>

<script>
export default {
  props: ['open']
};
</script>

<style scoped>
dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;

}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

.modal-enter-from {
  opacity: 0;
  transform: translateY(2rem);
}

.modal-enter-active {
  transition: all 0.3s ease-out;
}

.modal-enter-to {
  opacity: 1;
  transform: translateY(0rem);
}

.modal-leave-from {
  opacity: 1;
  transform: translateY(0rem);
}

.modal-leave-active {
  transition: all 0.2s ease-in;
}

.modal-leave-to {
  opacity: 0;
  transform: translateY(2rem);
}
</style>