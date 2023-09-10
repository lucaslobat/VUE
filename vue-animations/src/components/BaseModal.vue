<template>
  <div class="backdrop">
    <div @click="$emit('close')"></div>
    <dialog open>
      <slot></slot>
    </dialog>
  </div>
</template>

<script>
export default {
  emits: ['close'],
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
  transition: all 0.2s ease-in;
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
  transition: all 0.2s ease-out;
}

.modal-leave-to {
  opacity: 0;
  transform: translateY(2rem);
}
</style>