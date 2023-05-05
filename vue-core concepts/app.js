const app = Vue.createApp({
    data() {
        return {
            myGoal:"Be a good web developer",
            myLink:"https://vuejs.org/"
        }
    },
    methods:{
        switchGoals (){
            const randNumber = Math.random();
            return randNumber < 0.5 ? "Master Vue.js" : "Be a pro"
        }
    }
});
app.mount('#user-goal');