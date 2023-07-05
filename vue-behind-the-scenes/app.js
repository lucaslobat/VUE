const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    setText() {
      this.message = this.$refs.userInputText.value;
      console.log(this.$refs.userInputText.value)
    },
  },
});

app.mount('#app');
