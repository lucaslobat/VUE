Vue.createApp({
  data() {
    return {
      goalsArray: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goalsArray.push(this.enteredValue);
      this.enteredValue="";
    },
  },
}).mount('#app');
