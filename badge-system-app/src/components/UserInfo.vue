<template>
  <WrapperCard>
    <div>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </div>
    <p>{{ infoText }}</p>
  </WrapperCard>
</template>

<script>
import WrapperCard from "./slots/WrapperCard.vue";

export default {
  props: ["fullName", "infoText", "role"],
  components: { WrapperCard },
};
</script>

<style>
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
