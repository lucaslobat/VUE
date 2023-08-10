<template>
  <div class="flex base_card">
    <slot name="cover">
    </slot>

    <slot name="body">
    </slot>

    <slot name="footer"></slot>
  </div>
</template>

<style scoped>
.base_card {
  gap:0.5rem;
  flex-direction: column;
  border:2px solid blue;
  max-width:10rem;
  text-align: center;
}
</style>
