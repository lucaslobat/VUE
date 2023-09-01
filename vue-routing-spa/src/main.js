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
    { path: "/teams", name: "teams", component: TeamsList, alias: "/" },
    {
      path: "/teams/:teamId",
      name: "teamId",
      component: TeamMembers,
      props: true,
      children: [
        {
          path: ":selectedUser",
          name: "selectedUser",
          component: SelectedUser,
          props: true,
        },
      ],
    },
    { path: "/users", name: "users", component: UserList },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active-route",
});

app.use(router);
app.mount("#app");
