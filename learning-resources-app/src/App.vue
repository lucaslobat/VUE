<template>
  <TheHeader></TheHeader>
  <div class="container">
    <TheResources></TheResources>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResources from "./components/resources/TheResources.vue";

export default {
  components: { TheHeader, TheResources },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  font-family: "Poppins", sans-serif;
}

button {
  font-family: "Poppins", sans-serif;
}

a:visited {
  color: inherit;
}

.flex {
  display: flex;
}

.container {
  margin: 1rem auto;
  max-width: 80rem;
  padding: 2rem;
}
</style>
