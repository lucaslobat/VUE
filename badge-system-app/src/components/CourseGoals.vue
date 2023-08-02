<template>
  <WrapperCard>
    <template #header>
      <h2>Course goals</h2>
    </template>
    <template #main>
      <ul>
        <li v-for="goal in goals">
          <slot :item="goal">{{ goal }}</slot>
        </li>
      </ul>
    </template>
  </WrapperCard>
</template>

<script>
import WrapperCard from "./slots/WrapperCard.vue";

export default {
  data() {
    return {
      goals: ["Master Vue.js", "Improve logical reasoning"],
    };
  },
  components: { WrapperCard },
};
</script>
