<template>
  <BaseContainer>
    <ResourceItem
      v-for="resource in resources"
      :key="resource.id"
      :cover="resource.cover"
      :author="resource.author"
      :link="resource.link"
      :title="resource.title"
      :genericCover="genericCover"
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
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
