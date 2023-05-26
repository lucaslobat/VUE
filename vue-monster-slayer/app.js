Vue.createApp(
    {
        data() {
            return  {
                playerHealth:`${100}%`,
                monsterHealth:100,
                attackDamage:0,
                battleLog: []
                
            }
        },
        methods: {
            attack(){
                this.attackDamage = Math.floor(Math.random() * 20) + 1;
                let parsedMonsterHealth = parseFloat(this.monsterHealth);

                let newMonsterHealth = parsedMonsterHealth - this.attackDamage;
                this.monsterHealth = `${newMonsterHealth}%`;

                console.log(this.monsterHealth)

            }
        }
    }
).mount('#game');