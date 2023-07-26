<template>
  <form @submit.prevent class="new-friend-form flex">
    <div>
      <label for="friend-name">Friend's name</label>
    </div>
    <input id="friend-name" type="text" v-model="friendInformation.name" />
    <div>
      <label for="friend-phone">Friend's phone number</label>
    </div>
    <input id="friend-phone" type="text" v-model="friendInformation.phone" />
    <div>
      <label for="friend-email">Friend email address</label>
    </div>
    <input id="friend-email" type="text" v-model="friendInformation.email" />
    <div>
      <label for="friend-favorite">Favorite</label>
      <input
        id="friend-favorite"
        type="checkbox"
        v-model="friendInformation.isFavorite"
      />
    </div>
    <button @click="saveFriendObject">Submit</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      friendInformation: {
        id:"",
        name: "",
        phone: "",
        email: "",
        isFavorite: false,
      },
    };
  },
  methods: {
    saveFriendObject() {
      this.$emit('save-friend-object',this.friendInformation);
      this.friendInformation = {
        id:"",
        name: "",
        phone: "",
        email: "",
        isFavorite: false,        
      }
    },
  },
};
</script>
<style>
.new-friend-form {
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  max-width: 40rem;
}
</style>
