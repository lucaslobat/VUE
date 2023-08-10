<template>
  <div class="flex resources_list">
    <ResourceItem
      v-for="resource in resources"
      :key="resource.id"
      :cover="resource.cover"
      :author="resource.author"
      :link="resource.link"
      :title="resource.title"
    >
    </ResourceItem>
  </div>
</template>

<script>
import ResourceItem from "./ResourceItem.vue";

export default {
  components: { ResourceItem },
  props: ["resources"],
};
</script>

<style scoped>
.resources_list {
  border: 2px solid red;
  gap: 2rem;
  padding: 2rem;
  background-color: #252a33;
  color: white;
  flex-wrap: wrap;
}
</style>
