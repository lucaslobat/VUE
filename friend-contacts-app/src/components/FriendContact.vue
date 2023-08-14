<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "[Favorite]" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavoriteEvent">Toggle favorite</button>
    <button @click="deleteContact">Delete</button>
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
  props: ["id", "name", "phone", "email", "isFavorite"],
  emits: ["toggle-favorite","delete-contact"],
  
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavoriteEvent() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteContact(){
      this.$emit('delete-contact',this.id);
    }
  },
};
</script>
