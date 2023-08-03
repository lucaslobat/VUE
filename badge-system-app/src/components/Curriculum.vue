<template>
  <div class="curriculum_container">
    <h2>Tech and timeline</h2>
    <div>
      <div class="buttons">
        <button @click="setActiveComponent('frontend-module')">
          Frontend module
        </button>
        <button @click="setActiveComponent('backend-module-one')">
          Backend module 1
        </button>
        <button @click="setActiveComponent('backend-module-two')">
          Backend module 2
        </button>
      </div>

      <div class="program_details">
        <div v-if="activeComponent === 'frontend'">
          <h3>7 Weeks</h3>
          <p>
            Frontend dolor sit amet, consectetur adipisicing elit. Porro
            autem incidunt, quis nam culpa beatae rerum corporis quisquam
            repellendus minus adipisci sapiente nostrum. Quibusdam facere alias,
            expedita harum nobis quasi?
          </p>
        
        </div>

        <div v-else-if="activeComponent === 'backend-module-one'">
          <h3>11 Weeks</h3>
          <p>
            Backend1 dolor sit amet, consectetur adipisicing elit. Porro
            autem incidunt, quis nam culpa beatae rerum corporis quisquam
            repellendus minus adipisci sapiente nostrum. Quibusdam facere alias,
            expedita harum nobis quasi?
          </p>
        
        </div>

        <div v-else="activeComponent === 'backend-module-two'">
          <h3>11 Weeks</h3>
          <p>
            Backend2 dolor sit amet, consectetur adipisicing elit. Porro
            autem incidunt, quis nam culpa beatae rerum corporis quisquam
            repellendus minus adipisci sapiente nostrum. Quibusdam facere alias,
            expedita harum nobis quasi?
          </p>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeComponent: "frontend-module",
    };
  },
  methods: {
    setActiveComponent(componentName) {
      this.activeComponent = componentName;
    },
  },
};
</script>

<style scoped>
.curriculum_container {
  margin: 2rem auto;
  max-width: 50rem;
  border-radius: 0.3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1.5rem;
}

.buttons {
  display: flex;
  gap: 1.5rem;
}

.program_details {
  padding: 1.5rem;
  background-color: #d8d8d8;
  margin-top: 1rem;
}
</style>
