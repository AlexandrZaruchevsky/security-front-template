import roleAdmin from "../middleware/roleAdmin";

export default [
  {
    path: "/admin",
    name: "AdminMainView",
    component: () => import("../views/admin/AdminMainView.vue"),
    meta: {
      layout: "admin-layout",
      middleware:[roleAdmin],
    },
  },
  {
    path: "/admin/users",
    name: "UsersAdminView",
    component: () => import("../views/admin/UsersAdminView.vue"),
    meta: {
      layout: "admin-layout",
      middleware:[roleAdmin],
    },
  },
  {
    path: "/admin/users/add",
    name: "UserAdminEditView",
    component: () => import("../views/admin/UserAdminEditView.vue"),
    meta: {
      layout: "admin-layout",
      middleware:[roleAdmin],
    },
  },
  {
    path: "/admin/users/:id",
    name: "UserAdminEditView",
    component: () => import("../views/admin/UserAdminEditView.vue"),
    meta: {
      layout: "admin-layout",
      middleware:[roleAdmin],
    },
  },
];
