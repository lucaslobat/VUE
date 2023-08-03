<template>

  <WrapperCard>
    <template #header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role"></base-badge>
    </template>

    <template #main>
      <p>{{ infoText }}</p>
    </template>

  </WrapperCard>

</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>