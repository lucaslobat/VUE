const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number:10,
      name:""
    };
  },
  methods:{
    submitForm(){
      alert("Form submitted!");
    },
    add(number){
      this.counter = this.counter + number;
    },
    rest(number){
      this.counter = this.counter - number;
    },
    clearInput(){
      this.name="";
    }
  },
  computed:{
    fullName () {
      return  this.name ? `${this.name} Lobato` : '';
    }
  }
});

app.mount('#events');
