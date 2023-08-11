<template>
  <button class="base_button">
    <slot></slot>
  </button>
</template>

<style scoped>
.base_button {
  background-color: #d8d8d8;
  border-style: none;
  font-weight: 500;
  color: #252a33;
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1rem;
  min-width: 54px;
  padding: 0.5rem 1rem;
}

.base_button:hover {
  background-color: #8a8a8a;
  -webkit-transition: color 0.3s ease;
  -webkit-transition: background-color 0.3s ease;
}
</style>
