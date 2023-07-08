<template>
  <li class="friend-card">
    <h2>{{ name }} {{isFavorite ? "[Favorite]" : ""}}</h2>
    <button class="card-button" @click="toggleFavoriteKey">Toggle favorite</button>
    <button class="card-button" @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  /* props: ["name", "phoneNumber", "emailAddress","isFavorite"] */
  /* PROPERTIES */
  props: {
    id: {
      type:String,
      required:true
    },
    name: {
      type:String,
      required:true
    },
    phoneNumber:String,
    emailAddress:String,
    isFavorite: {
      type:Boolean,
      required:false
    }

  },

  /* CUSTOM EVENTS */
  emits: ["toggle-favorite-key"],

  /* VARIABLES */
  data() {
    return {
      detailsAreVisible: false,
    };
  },

  /* METHODS */
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavoriteKey(){
      this.$emit("toggle-favorite-key",this.id)
    }
  },
};
</script>

<style>
.friend-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  list-style: none;
  padding: 2rem;
  background-color: #ebebeb;
  width: 40rem;
  gap: 1rem;
}

.card-button {
  padding: 0.5rem;
  background-color: #e96136;
  border-radius: 0.2rem;
  color: #ebebeb;
  border: none;
}

ul {
  list-style: none;
}
</style>
