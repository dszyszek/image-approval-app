import React from "react";
import PropTypes from "prop-types";

import defaultStyles, { wrapperFactory } from "./styles";
import { LabeledThumbnailSlider, ApprovePicturesBody } from "../../molecules";
import { toUpperCase, merge } from "../../utils";
import { DEFAULT_TITLE } from "./constants";

const ApprovePictures = ({ styles, title, carouselImages }) => {
  const { wrapper: wrapperStyles, carousel: carouselStyles } = merge(
    defaultStyles,
    styles,
  );
  const Wrapper = wrapperFactory(wrapperStyles);

  const approvedPicturesTitle = toUpperCase(title);

  return (
    <Wrapper>
      <LabeledThumbnailSlider
        styles={carouselStyles}
        approvedPicturesTitle={approvedPicturesTitle}
        images={carouselImages}
      />
      <ApprovePicturesBody />
    </Wrapper>
  );
};

ApprovePictures.defaultProps = {
  styles: {},
  title: DEFAULT_TITLE,
  carouselImages: [],
};
ApprovePictures.propTypes = {
  styles: PropTypes.shape({
    wrapper: PropTypes.objectOf(PropTypes.string),
    carouselStyles: PropTypes.objectOf(PropTypes.string),
  }),
  title: PropTypes.string,
  carouselImages: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
export default ApprovePictures;
