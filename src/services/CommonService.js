export default class CommonService {
  static getHostApi() {
    return `${import.meta.env.VITE_HOST_REST}/api`
  }
  static getAdminApi(){
    return `${import.meta.env.VITE_HOST_REST}/api/admin`
    
  }
}
