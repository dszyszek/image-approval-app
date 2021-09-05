import { UNSPLASH_ADD_ONE_PICTURE } from "./types";

export const unsplashApiReduxActionsFactory = (api) => ({
  getPhotoByID:
    (id, params = {}, payload = null) =>
    async (dispatch) => {
      const data = payload ?? (await api.getPhotoByID(id, params));
      dispatch({
        type: UNSPLASH_ADD_ONE_PICTURE,
        payload: data.response,
      });
    },
  getRandomPhoto:
    (params = {}, payload) =>
    async (dispatch) => {
      const data = payload ?? (await api.getRandomPhoto(params));
      dispatch({
        type: UNSPLASH_ADD_ONE_PICTURE,
        payload: data.response,
      });
    },
});
