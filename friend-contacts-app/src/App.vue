<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <NewFriendForm @save-friend-object="saveFriendObject"/>
    <ul>
      <FriendContact
        v-for="friend in friends"
        :key="friend.id"
        v-bind="friend"
        @toggle-favorite="toggleFavorite"
        @delete-contact="deleteContact"
      />
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "0",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: false,
        },
        {
          id: "1",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(friendContactId) {
      const identifiedFriendObject = this.friends.find(
        (friend) => friend.id === friendContactId
      );
      identifiedFriendObject.isFavorite = !identifiedFriendObject.isFavorite;
    },
    saveFriendObject(friendObject){
      const newFriend = {...friendObject,id:this.friends.length.toString() }
      this.friends.push(newFriend);
    },
    deleteContact(contactId){
      //All the elements friend.id that are not equal to  contactId are added to the new created array.
      this.friends = this.friends.filter((friend) => friend.id !== contactId);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}

.flex {
  display: flex;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
