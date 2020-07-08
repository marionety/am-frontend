import VueRouter from "vue-router";
import AppRoutes from "./AppRoutes";

function loadPage(page) {
  return () => import(`@/pages/${page}`);
}

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      component: loadPage("Status"),
    },
    {
      path: AppRoutes.AMBULANCES,
      component: loadPage("Ambulances"),
    },
    {
      path: AppRoutes.JOURNEYS,
      component: loadPage("Journeys"),
    },
    {
      path: AppRoutes.TRANSFERS,
      component: loadPage("Transfers"),
    },
    {
      path: AppRoutes.LOCATIONS,
      component: loadPage("Locations"),
    },
    {
      path: "*",
      component: loadPage("NotFound"),
    },
  ],
});

export default router;
