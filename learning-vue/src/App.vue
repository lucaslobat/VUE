<template>
  <section>
    <h2>My friends</h2>
    <ul class="unordered-list">
      <friend-contact-card
        v-for="friend in friends"
        :id="friend.id"
        :key="friend.id"
        :name="friend.name"
        :email-address="friend.email"
        :phone-number="friend.phone"
        :is-favorite="friend.isFavorite"
        @toggle-favorite-key="toggleFavoriteKey"
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
          id: "mariog",
          name: "Mario Gomez",
          email: "mariog@gmail.com",
          phone: "165 176 394",
          isFavorite: false,
        },
        {
          id: "elisam",
          name: "Elisa Matara",
          email: "elisam@gmail.com",
          phone: "645 787 839",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteKey(friendId){
      const indentifiedFriend = this.friends.find( friend => friend.id === friendId);
      indentifiedFriend.isFavorite = !indentifiedFriend.isFavorite;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}
body {
  background-color: rgba(220, 220, 220, 255);
}

.unordered-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>
