import {
  page as PicturePage,
  name as PicturePageName,
  reducers as PicturePageReducers,
} from "./PicturePage";
import {
  page as NotFoundPage,
  name as NotFoundPageName,
  reducers as NotFoundPageReducers,
} from "./NotFoundPage";

// All pages' reducers
export const reducers = {
  [PicturePageName]: PicturePageReducers,
  [NotFoundPageName]: NotFoundPageReducers,
};

// All pages' names
export const names = [PicturePageName, NotFoundPageName];

// All pages
export const pages = {
  [PicturePageName]: PicturePage,
  [NotFoundPageName]: NotFoundPage,
};
