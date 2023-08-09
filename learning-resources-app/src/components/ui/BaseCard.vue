<template>
  <div class="flex base-card">
    <slot name="cover">
    </slot>

    <slot name="body">
    </slot>

    <slot name="footer"></slot>
  </div>
</template>

<style scoped>
.base-card {
  gap:0.5rem;
  flex-direction: column;
  max-width: 50rem;
  align-items: center;
  border:1px solid blue;
}
</style>
