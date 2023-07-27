import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ActiveElement from "./components/ActiveElement.vue";
import KnowledgeBase from "./components/KnowledgeBase.vue";
import KnowledgeElement from "./components/KnowledgeElement.vue";
import KnowledgeGrid from "./components/KnowledgeGrid.vue";

const app = createApp(App);
app.component("ActiveElement", ActiveElement);
app.component("KnowledgeBase", KnowledgeBase);
app.component("KnowledgeElement", KnowledgeElement);
app.component("KnowledgeGrid", KnowledgeGrid);

app.mount("#app");
