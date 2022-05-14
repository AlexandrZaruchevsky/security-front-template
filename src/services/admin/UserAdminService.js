import axios from "axios";
import CommonService from "../CommonService";
import store from "../../store";

const host = `${CommonService.getAdminApi()}/users`;

class UserAdminService {
  static async getUsers() {
    return axios
      .get(`${host}/all`, {
        headers: {
          Authorization: store.getters["auth/getToken"],
        },
      })
      .then((resp) => resp.data);
  }

  static async getUserCount() {
    return axios
      .get(`${host}/count`, {
        headers: {
          Authorization: store.getters["auth/getToken"],
        },
      })
      .then((response) => {
        return response.data;
      });
  }

  static async addUser(user) {
    return axios
      .post(`${host}/add`, user, {
        headers: {
          Authorization: store.getters["auth/getToken"],
        },
      })
      .then((response) => response.data);
  }

  static async updateUser(user) {
    return axios
      .post(`${host}/update`, user, {
        headers: {
          Authorization: store.getters["auth/getToken"],
        },
      })
      .then((response) => response.data);
  }

  static async findById(id) {
    return axios
      .get(`${host}/${id}`, {
        headers: {
          Authorization: store.getters["auth/getToken"],
        },
      })
      .then((response) => response.data);
  }

  static async changeActive(id) {
    return axios
      .post(`${host}/change-active/${id}`, null, {
        headers: {
          Authorization: store.getters["auth/getToken"],
        },
      })
      .then((response) => response.data);
  }

  static async deleteUser(id) {
    return axios
      .get(`${host}/delete`, {
        headers: {
          Authorization: store.getters["auth/getToken"],
        },
        params: {
          id: id,
        },
      })
      .then((response) => response.data);
  }
}

export default UserAdminService;
