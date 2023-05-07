Vue.createApp({
    data () {
        return {
            miObjetivo: "Ser constante en el estudio",
            miObjetivoA: "Dominar Vue.js",
            miObjetivoB: "Poner esfuerzo",
            miObjetivoC:"<h4>Aprender nuevas tecnologías</h4>",
            miEnlace:"https://vuejs.org/"
        }
    },
    methods: {
        miFuncion() {
            const randomNum = Math.floor(Math.random() * (2) + 1);
            console.log(randomNum)
            return randomNum <= 1 ? this.miObjetivoA : this.miObjetivoB;
        }
    }

}).mount('#user-goal')