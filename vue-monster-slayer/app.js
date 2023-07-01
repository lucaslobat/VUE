// Genera un número aleatorio entre un número mínimo y máximo.
const genRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    playerAttack() {
      const attackDamage = genRandomNum(5, 16);
      this.monsterHealth -= attackDamage;
      this.monsterAttack();
    },
    monsterAttack() {
      const attackDamage = genRandomNum(5, 21);
      this.playerHealth -= attackDamage;
    },
  },
}).mount("#game");
