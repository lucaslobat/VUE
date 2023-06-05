const genRandomNumber = (min, max) => {
  let randomNumber = Math.floor(Math.random() * max) + min;
  return randomNumber;
};

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      battleLog: [],
      gameOverMessage: undefined,
      roundCounter: 0,
    };
  },
  methods: {
    playerAttack() {
      console.log(this.roundCounter % 3);
      if (this.playerHealth > 0) {
        this.roundCounter++;

        //Damage action
        const playerAttackDamage = genRandomNumber(5, 20);
        this.monsterHealth -= playerAttackDamage;

        //Log
        this.battleLog.push({
          text: `The player damaged the monster by ${playerAttackDamage}`,
        });

        //Strike back
        this.monsterAttack();
      } else {
        this.gameOverMessage = "You're dead.";
      }
    },
    monsterAttack() {
      if (this.monsterHealth > 0) {
        const monsterAttackDamage = genRandomNumber(8, 25);
        this.playerHealth -= monsterAttackDamage;

        this.battleLog.push({
          text: `The monster damaged the player by ${monsterAttackDamage}`,
        });
      } else {
        this.gameOverMessage = "The monster has been slayed.";
      }
    },
    specialAttack() {
      if (this.playerHealth > 0 || this.monsterHealth > 0) {
        this.roundCounter++;
        const specialAttack = genRandomNumber(10, 30);
        this.monsterHealth -= specialAttack;

        this.battleLog.push({
          text: `The player damaged the monster by ${specialAttack}`,
        });

        this.monsterAttack();
      }
    },
  },
  computed: {
    dynamicWidthMonster() {
      return { width: `${this.monsterHealth}%` };
    },
    dynamicWidthPlayer() {
      return { width: `${this.playerHealth}%` };
    },
    useSpecialAttack() {
      return (
        this.roundCounter % 3 !== 0 ||
        (this.roundCounter === 0 && this.gameOverMessage != undefined)
      );
    },
  },
}).mount("#game");
