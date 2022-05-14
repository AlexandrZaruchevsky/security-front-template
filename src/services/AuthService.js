import axios from "axios";
import CommonService from "./CommonService";

const host = `${CommonService.getHostApi()}/auth`;

export default class AuthService {

  static async getAuth(userLogin) {
    return axios
      .post(`${host}/login`, userLogin)
      .then((response) => response.data);
  }

  static async registration(userRegistration) {
    return axios
      .post(`${host}/registration`, userRegistration)
      .then((response) => {
        console.log(response);
        return response.data
      });
  }
  
}
