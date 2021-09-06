/* eslint no-await-in-loop: 0 */

export const extractRelevantFromUnsplashRespone = (response) => ({
  id: response.id,
  small: response.urls.small,
  thumb: response.urls.thumb,
  alt: response.alt_description,
});

export const getApprovablePhoto = async (apiReference, excludedIDs) => {
  let isRejectable = true;
  let response;
  while (isRejectable) {
    response = await apiReference.getRandomPhoto();
    isRejectable = excludedIDs.includes(response.response.id);
  }
  return extractRelevantFromUnsplashRespone(response.response);
};
