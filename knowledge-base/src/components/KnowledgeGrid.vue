<template>
  <ul>
    <KnowledgeElement
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></KnowledgeElement>
  </ul>
</template>

<script>
export default {
  emits: ['select-topic'],
  inject:['topics']
};
</script>