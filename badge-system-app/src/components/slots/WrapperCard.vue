<template>
  <section>
    <header v-if="$slots.header">
      <slot name="header">
        <h2>The Header</h2>
      </slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
  </section>
</template>

<script>
export default {
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 0.3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1.5rem;
}
</style>
