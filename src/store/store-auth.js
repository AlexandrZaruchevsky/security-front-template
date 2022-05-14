export default {
  namespaced: true,
  state: () => ({
    auth: false,
    token: null,
    user: {},
  }),
  mutations: {
    mutSetAuth(state, payload) {
      state.auth = payload;
    },
    mutSetToken(state, payload) {
      state.token = payload;
    },
    mutSetUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    actSetAuth({ commit }, payload) {
      commit("mutSetAuth", payload);
    },
    actSetToken({ commit }, payload) {
      commit("mutSetToken", payload);
    },
    actSetUser({ commit }, payload) {
      commit("mutSetUser", payload);
    },
    actLoadFromStore({ commit }) {
      commit("mutSetAuth", localStorage.getItem("auth") ?? false);
      commit("mutSetToken", localStorage.getItem("token") ?? null);
      const user = localStorage.getItem("user");
      if (user) {
        commit("mutSetUser", JSON.parse(localStorage.getItem("user")));
      } else {
        commit("mutSetUser", {});
      }
    },
    actSaveToStore({state}) {
      localStorage.setItem("auth", state.auth);
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    actLogout({ commit }) {
      commit("mutSetAuth", false);
      commit("mutSetToken", null);
      commit("mutSetUser", {});
      localStorage.clear();
    },
    actLogin({ commit, dispatch }, payload) {
      commit("mutSetAuth", true);
      commit("mutSetToken", payload.token);
      commit("mutSetUser", payload.user);
      dispatch("actSaveToStore");
    },
  },
  getters: {
    isAuth: (state) => {
      return state.auth;
    },
    isAdmin: (state) => {
      return state.user?.role?.toLowerCase() == "admin" ? true : false;
    },
    getToken: (state) => {
      return state.token ? `Bearer ${state.token}` : null;
    },
    getUser: (state) => {
      return state.user;
    },
    getFioShort: (state) => {
      return (
        (state.user.lastName ? state.user.lastName + " " : "Undefine") +
        (state.user.firstName
          ? state.user.firstName.substring(0, 1) + "."
          : "") +
        (state.user.middleName
          ? state.user.middleName.substring(0, 1) + "."
          : "")
      );
    },
  },
};
