export const extractRelevantFromUnsplashRespone = (response) => ({
  id: response.id,
  small: response.urls.small,
  thumb: response.urls.thumb,
  alt: response.alt_description,
});
