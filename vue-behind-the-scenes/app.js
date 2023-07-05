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
    },
  },

beforeCreate(){
  console.log("beforeCreate()")
},
created(){
  console.log("created()")
},
beforeMount(){
  console.log("beforeMount()");
},
mounted(){
  console.log("mounted()");
},
beforeUpdate(){
  console.log("beforeUpdate()");
},
updated(){
  console.log("updated()");
}

});

app.mount('#app');
