import React from "react";
import PropTypes from "prop-types";

import defaultStyles, { wrapperFactory } from "./styles";
import { ApprovePicturesCarousel } from "../../molecules";
import { toUpperCase, merge } from "../../utils";
import { DEFAULT_TITLE } from "./constants";

const ApprovePictures = ({ styles, title }) => {
  const { wrapper: wrapperStyles, carousel: carouselStyles } = merge(
    defaultStyles,
    styles,
  );
  const Wrapper = wrapperFactory(wrapperStyles);

  const approvedPicturesTitle = toUpperCase(title);

  return (
    <Wrapper>
      <ApprovePicturesCarousel
        styles={carouselStyles}
        approvedPicturesTitle={approvedPicturesTitle}
      />
    </Wrapper>
  );
};

ApprovePictures.defaultProps = {
  styles: {},
  title: DEFAULT_TITLE,
};
ApprovePictures.propTypes = {
  styles: PropTypes.shape({
    wrapper: PropTypes.objectOf(PropTypes.string),
    carouselStyles: PropTypes.objectOf(PropTypes.string),
  }),
  title: PropTypes.string,
};
export default ApprovePictures;
