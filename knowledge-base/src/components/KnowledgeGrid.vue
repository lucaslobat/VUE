<template>
  <ul>
    <KnowledgeElement
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></KnowledgeElement>
  </ul>
</template>

<script>
export default {
  inject: ["topics"],
};
</script>
