<template>
  <BaseContainer additionalClasses="resources_container">
    <div><img :src="cover" alt="book" class="resource_cover" /></div>

    <div class="flex resource_body">
      <p class="card_title">{{ title }}</p>
      <p>{{ author }}</p>
      <p><a :href="link" target="_blank">See resource</a></p>
      <BaseButton> Delete </BaseButton>
    </div>
  </BaseContainer>
</template>

<script>
export default {
  props: ["author", "title", "link","cover"],
};
</script>

<style scoped>

.resource_container{
  flex-direction: column;
  max-width: 12rem;
  border:2px solid blue;
}
.resource_cover {
  width: 10rem;
  aspect-ratio: 1.2/2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.card_title {
  font-size: 1rem;
  font-weight: 500;
}

.resource_body{
  gap:0.5rem;
  flex-direction: column;
  text-align:left;
}
</style>
