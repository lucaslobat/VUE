Vue.createApp({
    data(){
        return {
            question:'',
            answer:'',
            title:'Learning watchers'
        }
    },
    watch: {
        question(currentQuestion) {
            (currentQuestion.indexOf('?') > -1) && this.getAnswer()
        }
    },
    methods: {
        async getAnswer () {
            this.answer = 'Loading';
            try {
                const result = await fetch('https://yesno.wtf/api');
                this.answer = (await result.json()).answer;

            } catch (err) {
                this.answer = `Sorry. It wasnt possible to finde your answer. ${err}`
            }
        }
    },
}).mount('#app');