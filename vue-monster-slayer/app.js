const genRandomNumber = (maxPower) => {
  let randomNumber = Math.floor(Math.random() * maxPower) + 1;
  return randomNumber;
};

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      battleLog: [],
      gameOverMessage:""
    };
  },
  methods: {
    playerAttack() {
      if (this.playerHealth > 0) {
        const playerAttackDamage = genRandomNumber(20);
        this.monsterHealth -= playerAttackDamage;
        this.battleLog.push({
          text: `The player damaged the monster by ${playerAttackDamage}`,
        });
        this.monsterAttack();
      } else {
        this.gameOverMessage = "You're dead."
      }
    },
    monsterAttack() {
      if (this.monsterHealth > 0) {
        const monsterAttackDamage = genRandomNumber(40);
        this.playerHealth -= monsterAttackDamage;
        this.battleLog.push({
          text: `The monster damaged the player by ${monsterAttackDamage}`,
        });
      } else {
        this.gameOverMessage = "The monster has been slayed."
      }
    },
  },
  computed: {
    dynamicWidthMonster() {
      return { width: `${this.monsterHealth}%` };
    },
    dynamicWidthPlayer(){
        return { width: `${this.playerHealth}%` };
    }
  },
}).mount("#game");
