export default [
  {
    path: "/auth/sign-up",
    name: "sign-up",
    component: () => import("../views/auth/SignUpView.vue"),
    meta: {
      layout: "auth-layout",
    },
  },
  {
    path: "/auth/sign-in",
    name: "sign-in",
    component: () => import("../views/auth/SignInView.vue"),
    meta: {
      layout: "auth-layout",
    },
  },
];
