<template>
  <BaseCard>
    <template #cover>
      <img :src="cover" alt="book" class="book_cover" />
    </template>

    <template #body>
      <p class="card_title">{{ title }}</p>
      <p>{{ author }}</p>
      <p><a :href="link" target="_blank">See resource</a></p>
    </template>

    <template #footer>
      <BaseButton>
        <template #buttonText>
          Delete
        </template>
      </BaseButton>
    </template>
  </BaseCard>
</template>

<script>
export default {
  props: ["cover", "author", "title", "link"],
};
</script>

<style scoped>
.book_cover {
  width: 10rem;
  aspect-ratio: 1.2/2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.card_title {
  font-size: 1rem;
  font-weight: 500;
}
</style>
