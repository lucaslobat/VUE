const genRandomNumber = (maxPower) => {
    let randomNumber = Math.floor(Math.random() * maxPower) + 1;
    return randomNumber;

}

Vue.createApp(
    {
        data() {
            return  {
                playerHealth:100,
                monsterHealth:100,
                battleLog: []
                
            }
        },
        methods: {
            playerAttack(){
                const playerAttackDamage = genRandomNumber(20);
                this.monsterHealth -= playerAttackDamage;

                /* this.monsterAttack(); */
                console.log(`Monster health:${this.playerHealth}`);

            },
            monsterAttack(){
                const monsterAttackDamage = genRandomNumber(40);
                this.playerHealth -= monsterAttackDamage;
                console.log(`Player health:${this.playerHealth}`);



            },
        }
    }
).mount('#game');