export default function roleAdmin({ next, store }) {
  if (!store.getters["auth/isAdmin"]) {
    return next({
      path: "/",
    });
  }
  return next();
}
