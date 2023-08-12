<template>
  <div :class="setClasses"><slot></slot></div>
</template>

<script>
export default {
  props: ["additionalClasses"],
  computed: {
    setClasses() {
      if(this.additionalClasses === "resources_container"){
        return "flex resources_container"
      } else if(this.additionalClasses === "base_container"){
        return "flex base_container"
      }
    },
  },
};
</script>
<style scoped>
.base_container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.resources_container {
  flex-direction: column;
  max-width: 12.5rem;
  gap: 0.5rem;
  text-align: center;
  padding:1.5rem;
  color:black;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
