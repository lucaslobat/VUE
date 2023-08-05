<template>
  <section>
    <header v-if="$slots.header">
      <slot name="header">
        <h2>The Header</h2>
      </slot>
    </header>
    <main class="buttons main_class">
      <slot name="main"></slot>
    </main>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  margin: 1rem auto;
  max-width: 30rem;
  border-radius: 0.3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1.5rem;
}

header {
  display: flex;
  gap: 0.8rem;
  align-items: center;
}

.main_class {
  flex-direction: column;
}

.buttons {
  display: flex;
  gap: 0.5rem;
}

</style>
