import ComponentA from "@/components/ComponentA.vue";
import ComponentB from "@/components/ComponentB.vue";
import ComponentC from "@/components/ComponentC.vue";
import ComponentD from "@/components/ComponentD.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/A/:name", name: "component-a", component: ComponentA },
    { path: "/B", name: "component-b", component: ComponentB },
    { path: "/C", name: "component-c", component: ComponentC },
    { path: "/D", name: "component-d", component: ComponentD },
  ],
});

export default router;
