<template>
  <BaseCard>
    <template #header>
      <h2>{{ title }}</h2>
    </template>
    <template #body>
      <p>{{ description }}</p>
      <p><a :href="link" target="_blank">See resource</a></p>
    </template>
  </BaseCard>
</template>

<script>
export default {
  props: ["id", "title", "description", "link"],
};
</script>

<style scoped></style>
