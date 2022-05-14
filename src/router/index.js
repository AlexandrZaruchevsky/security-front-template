import { createRouter, createWebHistory } from "vue-router";
import adminRoute from "./admin-route";
import authRoute from "./auth-route";
import store from "../store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainView",
      component: () => import("../views/MainView.vue"),
      meta: {
        layout: "default-layout",
      },
    },
    ...adminRoute,
    ...authRoute,
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    store,
  };
  return middleware[0]({
    ...context,
  });
});

export default router;
