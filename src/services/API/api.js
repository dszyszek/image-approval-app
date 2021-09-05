import axios from "axios";

/**
 * Abstract Class API.
 *
 * @class API
 */

class API {
  #instance;

  constructor(base = "", callableInstance) {
    if (this.constructor === API) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    this.instance =
      callableInstance ||
      axios.create({
        baseURL: base,
      });
  }

  async get(routeStr) {
    return this.instance.get(routeStr);
  }
}

export default API;
