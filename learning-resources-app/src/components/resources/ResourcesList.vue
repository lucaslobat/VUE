<template>
  <BaseContainer>
    <ResourceItem
      v-for="resource in resources"
      :key="resource.id"
      :id="resource.id"
      :cover="resource.cover"
      :author="resource.author"
      :link="resource.link"
      :title="resource.title"
    >
    </ResourceItem>
  </BaseContainer>
</template>

<script>
import ResourceItem from "./ResourceItem.vue";

export default {
  components: { ResourceItem },
  inject: ['resources']
};
</script>

<style scoped>
div[data-v-284f67ea]{
  justify-content: center;
  gap:3rem;
  flex-wrap: wrap;
}
</style>
