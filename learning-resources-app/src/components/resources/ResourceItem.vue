<template>
  <BaseContainer>
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
import genericCover from '../../assets/images/book-covers/generic-cover.jpg'
export default {
  props: ["author", "title", "link"],
  data(){
    return {
      cover: genericCover
    }
  }
};
</script>

<style scoped>

div[data-v-78a28d39]{
  flex-direction: column;
  max-width: 12.5rem;
  gap: 0.5rem;
  text-align: center;
  padding:1.5rem;
  color:black;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
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
