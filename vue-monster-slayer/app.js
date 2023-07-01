// Genera un número aleatorio entre un número mínimo y máximo.
const genRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      roundCounter: 1,
    };
  },
  methods: {
    playerAttack() {
      this.roundCounter++;
      const attackDamage = genRandomNum(5, 16);
      this.monsterHealth -= attackDamage;
      this.monsterAttack();
    },
    monsterAttack() {
      const attackDamage = genRandomNum(5, 21);
      this.playerHealth -= attackDamage;
    },
    specialAttack() {
      this.roundCounter++;
      const attackDamage = genRandomNum(5, 16) * 2;
      this.monsterHealth -= attackDamage;
    },
    healPlayer() {
      this.roundCounter++;
      const healValue = genRandomNum(8, 20);
      this.playerHealth + healValue > 100
        ? (this.playerHealth = 100)
        : (this.playerHealth += healValue);
    },
  },
  computed: {
    monsterBarWidth() {
      return { width: `${this.monsterHealth}%` };
    },
    playerBarWidth() {
      return { width: `${this.playerHealth}%` };
    },
    activateSpecialAttack() {
      return this.roundCounter % 3 !== 0;
    },
  },
}).mount("#game");
