const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      goalInput:"",
     };
  },
  methods: {
    addGoal(){
      if (this.goalInput) {
        this.goals.push(this.goalInput);
        this.goalInput = "";
      }
      
    },
    removeGoal(index){
      this.goals.splice(index,1);
    }
  }
});

app.mount('#user-goals');
