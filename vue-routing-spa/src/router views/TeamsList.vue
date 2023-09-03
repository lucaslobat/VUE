<!-- This component renders a list of all the available teams. Receives the 'teams' varai -->
<template>
  <ul>
    <TeamItem v-for="team in teams" :key="team.id" :id="team.id" :name="team.name" :member-count="team.members.length">
    </TeamItem>
    <RouterView></RouterView>
  </ul>
</template>

<script>
import TeamItem from '../components/teams/TeamItem.vue'

export default {
  components: {
    TeamItem,
  },
  inject: ['teams'],

};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>