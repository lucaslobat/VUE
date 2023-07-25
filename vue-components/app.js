const app = Vue.createApp({
  data() {
    return {
      friends: [
        ,
        {
          id: "Sofia",
          name: "Sofia García",
          phone: "657 777 363",
          email: "sofiag@gmail.com",
        },
      ],
    };
  },
  methods: {},
});

app.component("friend-card", {
  template: `        
  <li :key="friend.id">
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">{{toggleDetails ? "Hide" : "Show"}} Details</button>
    <ul v-if="isDetailsActive">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>`,
  data() {
    return {
      isDetailsActive: false,
      friend: {
        id: "Manuel",
        name: "Manuel Raikkonen",
        phone: "645 376 298",
        email: "manuspain@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.isDetailsActive = !this.isDetailsActive;
    },
  },
});
app.mount("#app");
