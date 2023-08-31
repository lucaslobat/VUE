import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UserList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue";
import SelectedUser from "./components/users/SelectedUser.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    /* { path: "/", redirect:'/teams' }, */
    { path: "/teams", component: TeamsList, alias: "/"},
    {
      path: "/teams/:teamId",
      component: TeamMembers,
      props: true,
      children: [{ path: "/teams/:teamId/:selectedUser", component: SelectedUser, props: true }],
    },
    { path: "/users", component: UserList },
    //This route accepts dynamic values and render TeamMembers

    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active-route",
});

app.use(router);
app.mount("#app");
