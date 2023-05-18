Vue.createApp({
  data() {
    return {
      question: "",
      answer: "",
      title: "Learning watchers",
      image: ""
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
    // Función asíncrona
    async getAnswer() {
      this.answer = "Loading";
      try {
        const bruteResult = await fetch("https://yesno.wtf/api");
        console.log(typeof(bruteResult));

        const parsedResult = await bruteResult.json();
        console.log(typeof(parsedResult));

        //Probar desestructuración de objetos aqui. {this.answer, , this.image} = parsedResult;
        this.answer = parsedResult.answer;
        this.image = parsedResult.image;
      } catch (err) {
        this.answer = `Sorry. It wasnt possible to find your answer. ${err}`;
      }
    }
  },
}).mount("#app");
