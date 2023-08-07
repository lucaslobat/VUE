<template>
  <div class="base-card">
    <slot name="header">
    </slot>

    <slot name="body">
    </slot>
  </div>
</template>

<style scoped>
.base-card {
  margin: 1rem auto;
  max-width: 50rem;
  border-radius: 0.3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1.5rem;
}
</style>
