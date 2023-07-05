// Genera un número aleatorio entre un número mínimo y máximo.
const genRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

Vue.createApp({
  data() {
    return {
      // Variables utilizadas para controlar la vida del jugador y del monstruo y la ronda
      heroHealth: 100,
      monsterHealth: 100,
      roundCounter: 1,
      battleLog: [],
      gameOverMessage: null,
    };
  },
  methods: {
    newGame() {
      this.heroHealth = 100;
      this.monsterHealth = 100;
      this.roundCounter = 0;
      this.battleLog = [];
      this.gameOverMessage = null;
    },
    heroAttack() {
      this.roundCounter++;
      const attackDamage = genRandomNum(5, 16);
      this.monsterHealth -= attackDamage;
      this.battleLog.push(`The hero inflicted ${attackDamage} on the monster`);
      this.monsterAttack();
    },
    monsterAttack() {
      const attackDamage = genRandomNum(5, 21);
      this.heroHealth -= attackDamage;
      this.battleLog.push(`The monster inflicted ${attackDamage} on the hero`);
    },
    specialAttack() {
      this.roundCounter++;
      const attackDamage = genRandomNum(5, 16) * 2;
      this.monsterHealth -= attackDamage;
      this.battleLog.push(
        `The hero inflicted a special attack of ${attackDamage} on the monster`
      );
    },
    healHero() {
      this.roundCounter++;
      const healValue = genRandomNum(8, 20);
      this.heroHealth + healValue > 100
        ? (this.heroHealth = 100)
        : (this.heroHealth += healValue);
      this.battleLog.push(`The hero healed for ${healValue}`);
    },
    surrender() {
      this.gameOverMessage = "You've surrended."
    }
  },
  computed: {
    monsterBarWidth() {
      if (this.monsterHealth < 0) {
        return { width: `0%` };
      }
      return { width: `${this.monsterHealth}%` };
    },
    heroBarWidth() {
      if (this.heroHealth < 0) {
        return { width: `0%` };
      }
      return { width: `${this.heroHealth}%` };
    },
    activateSpecialAttack() {
      return this.roundCounter % 3 !== 0;
    },
  },
  watch: {
    heroHealth(hHealth) {
      if (hHealth <= 0 && this.monsterHealth <= 0) {
        this.gameOverMessage = "The game ended in a draw";
      } else if (hHealth <= 0) {
        this.gameOverMessage = "You lose.";
      }
    },
    monsterHealth(mHealth) {
      if (mHealth <= 0 && this.heroHealth <= 0) {
        this.gameOverMessage = "The game ended in a draw";
      } else if (mHealth <= 0) {
        this.gameOverMessage = "You win! The monster has been slain";
      }
    },
  },
}).mount("#game");
