<template>
  <section>
    <h2>Select a Topic</h2>
    <KnowledgeGrid  @select-topic="$emit('select-topic', $event)"></KnowledgeGrid>
  </section>
</template>

<script>
export default {
  props: ['topics'],
  emits: ['select-topic'],
};
</script>