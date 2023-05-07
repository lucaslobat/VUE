Vue.createApp({
  data() {
    return {
      question: "",
      answer: "",
      title: "Learning watchers",
      image: "",
    };
  },
  watch: {
    question(currentQuestion) {
      if (currentQuestion.indexOf("?") > -1) {
        this.getAnswer();
      } else {
        !this.question && (this.answer = '');
        !this.question && (this.image = '');
      }
    },
  },
  methods: {
    async getAnswer() {
      this.answer = "Loading";
      try {
        const result = await fetch("https://yesno.wtf/api");
        const fetchedObj = await result.json();
        this.answer = fetchedObj.answer;
        this.image = fetchedObj.image;
      } catch (err) {
        this.answer = `Sorry. It wasnt possible to find your answer. ${err}`;
      }
    },
  },
}).mount("#app");
