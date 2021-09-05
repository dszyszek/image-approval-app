import { createApi } from "unsplash-js";
import toPath from "lodash/toPath";

import API from "./api";

class UnsplashAPI extends API {
  constructor(props) {
    super(props);
    this.instance = createApi({
      accessKey: process.env.UNSPLASH_API_KEY,
    });
  }

  get(path, params) {
    const pathParsed = toPath(path);
    const callable = pathParsed.reduce(
      (acc, nextCallable) => acc[nextCallable],
      this.instance,
    );
    return callable(params);
  }

  getPhotoByID(id) {
    return this.get("photos.get", { photoId: id });
  }

  getRandomPhoto(params = {}) {
    return this.get("photos.getRandom", params);
  }
}

export default UnsplashAPI;
