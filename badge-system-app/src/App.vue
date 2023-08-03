<template>
  <div>
    <TheHeader />

    <!--         <BadgeList /> -->
    <WrapperCard>
      <template #main>
        <button @click="setActiveComponent('BadgeList')">User info</button> 
        <button @click="setActiveComponent('CourseGoals')">Course goals</button>
      </template>
    </WrapperCard>

    <component :is="activeComponent"></component>

<!--     <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <CourseGoals #slotProps>
      <h2>{{ slotProps.item }}</h2>
    </CourseGoals> -->
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import UserInfo from "./components/UserInfo.vue";
import BadgeList from "./components/BadgeList.vue";
import CourseGoals from "./components/CourseGoals.vue";
import WrapperCard from "./components/slots/WrapperCard.vue";

export default {
  // Locally imported component
  components: { TheHeader, CourseGoals, UserInfo, WrapperCard,BadgeList},

  data() {
    return {
      activeComponent:'UserInfo',
      activeUser: {
        name: "Lucas Lobato Botelho ",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  
  methods: {
    setActiveComponent(componentName){
      this.activeComponent = componentName;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
