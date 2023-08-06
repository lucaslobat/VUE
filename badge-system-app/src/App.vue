<template>
  <div>
    <TheHeader />

    <!--         <BadgeList /> -->
    <WrapperCard>
      <template #header>
        <button @click="setActiveComponent('BadgeList')">User info</button>
        <button @click="setActiveComponent('CourseGoals')">Course goals</button>
      </template>
    </WrapperCard>

    <KeepAlive>
      <Component :is="activeComponent"></Component>
    </KeepAlive>

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
import Modal from "./components/slots/Modal.vue";

export default {
  // Locally imported component
  components: { TheHeader, CourseGoals, UserInfo, WrapperCard, BadgeList, Modal },

  data() {
    return {
      activeComponent: "BadgeList",
      activeUser: {
        name: "Lucas Lobato Botelho ",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },

  methods: {
    setActiveComponent(componentName) {
      this.activeComponent = componentName;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
