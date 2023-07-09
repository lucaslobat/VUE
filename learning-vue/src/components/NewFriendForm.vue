<template>
  <form @submit.prevent="sendForm" class="friend-form">
    <h2>Friend information form</h2>
    <label for="friend-id">Id </label>
    <input id="friend-id" type="text" v-model="this.friendObject.id" />

    <label for="friend-name">Name </label>
    <input id="friend-name" type="text" v-model="this.friendObject.name" />

    <label for="friend-email">Email adress </label>
    <input id="friend-email" type="text" v-model="this.friendObject.emailAddress" />

    <label for="friend-phone">Phone number </label>
    <input id="friend-id" type="text" v-model="this.friendObject.phoneNumber" />

    <div>
      <label for="friend-isFavorite">Favorite</label>
      <input id="friend-isFavorite" type="checkbox" v-model="this.friendObject.isFavorite" />
    </div>
    <button type="submit" class="generic-button">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      friendObject: {
        id: "",
        name: "",
        emailAddress: "",
        phoneNumber: "",
        isFavorite: false,
      },
    };
  },
  methods: {
    sendForm() {
      this.$emit(
        "submit-new-friend-form",this.friendObject
      );
    },
  },
};
</script>

<style>
.friend-form {
  display: flex;
  flex-direction: column;
  border: 0.1rem solid black;
  padding: 2rem;
  gap: 0.2rem;
}
</style>
