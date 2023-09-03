<!-- This component renders a section with the Team Name and it's members.Receives the 'users' varible and a route parameter -->
<template>
  <section>
    <h2 v-if="errorMessage">{{ errorMessage }}</h2>
    <h2>{{ currentTeamName }}</h2>
    <ul>
      <user-item v-for="member in currentMembers" :key="member.id" :memberId="member.id" :name="member.fullName" :teamId="teamId"
        :role="member.role"></user-item>
    </ul>
  </section>
  <RouterView></RouterView>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  inheritAttrs:false,
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      currentTeamName: '',
      currentMembers: [],
      errorMessage: null
    };
  },
  methods: {
    getMembers(param) {
      this.errorMessage = null;
      try {
        // Receives the dynamic parameter expected on the "routes" array and send by the URL.
        /*       const teamIdParam = param.teamId; */

        if (param) {
          // Iterates over the injected "teams" array and store the element which id property matches "teamIdParam"
          const foundTeam = this.teams.find(element => element.id === param);

          // Grabs the foundTeam "members" property and stores it in variable.
          const foundMembers = foundTeam.members;

          // Creates an array to store all the identified members of a determined team.
          const identifiedMembers = [];

          // Iterates over the injected "users" array, extracts those who match with the foundMembers array, and stores it into the "identifiedMembers" array.
          for (const foundMembersElement of foundMembers) {
            const foundUser = this.users.find(element => element.id === foundMembersElement);
            identifiedMembers.push(foundUser);
          }

          // Set the current "currentTeamName" equals to the "foundTeam.name" property
          this.currentTeamName = foundTeam.name;

          // Set the value of currentMembers 
          this.currentMembers = identifiedMembers;
        }
      } catch (e) {
        this.errorMessage = "Page not found";
      }

    }
  },
  created() {
    this.getMembers(this.teamId);
    console.log(this.$route.query)
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>