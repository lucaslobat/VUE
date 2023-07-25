<template>
  <form>
    <div>
      <label for="friend-name">Friend's name:</label>
      <input id="friend-name" type="text" v-model="friendInformation.name" />
    </div>
    <div>
      <label for="friend-phone">Friend's phone number:</label>
      <input id="friend-phone" type="text" v-model="friendInformation.phone"/>
    </div>
    <div>
      <label for="friend-email">Friend email address:</label>
      <input id="friend-email" type="text" v-model="friendInformation.email"/>
    </div>
    <div>
      <label for="friend-favorite">Favorite:</label>
      <input id="friend-favorite" type="checkbox" v-model="friendInformation.isFavorite"/>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      friendInformation: {
        name: "",
        phone: "",
        email: "",
        isFavorite: false,
      },
    };
  },
};
</script>
<style></style>
