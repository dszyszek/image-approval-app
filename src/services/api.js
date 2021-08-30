import axios from "axios";

class API {
  #instance;

  constructor(base = "") {
    this.instance = axios.create({
      baseURL: base,
    });
  }

  get(routeStr) {
    return this.instance.get(routeStr);
  }

  post(route, payload) {
    return this.instance.post(route, payload);
  }
}

export default API;
