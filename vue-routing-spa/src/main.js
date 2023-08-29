import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UserList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue"

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    /* { path: "/", redirect:'/teams' }, */
    { path: "/teams", component: TeamsList, alias: "/" },
    { path: "/users", component: UserList },
    //This route accepts dynamic values and render TeamMembers
    { path: "/teams/:teamId", component: TeamMembers, props: true },
    { path: "/:notFound(.*)", component: NotFound},
  ],
  linkActiveClass: "active-route",
});

app.use(router);
app.mount("#app");
