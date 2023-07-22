<template>
  <li>
    <h2>{{ name }} {{ isFav ? "[Favorite]" : "" }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Toggle favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props:["name","phone","email","isFavorite"],
  data() {
    return {
      detailsAreVisible: false,
      isFav: this.isFavorite
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      this.isFav = !this.isFav;
    }
  }
};
</script>