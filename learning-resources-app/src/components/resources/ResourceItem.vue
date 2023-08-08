6<template>
  <BaseCard>
    <template #cover>
      <h3>{{ title }}</h3>
      <img :src="cover" alt="book" class="book_cover"/>
    </template>

    <template #author>
      <p>{{author}}</p>
      <p><a :href="link" target="_blank">See resource</a></p>
    </template>
  </BaseCard>
</template>

<script>
export default {
  props: ["cover","author","title","link"]
};
</script>

<style scoped>
.book_cover{
  width:10rem;
  aspect-ratio: 1.2/2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
