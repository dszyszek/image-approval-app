import React from "react";
import PropTypes from "prop-types";
import merge from "lodash/merge";

import defaultStyles, { wrapperFactory } from "./styles";
import { ApprovePicturesCarousel } from "../../molecules";
import { toUpperCase } from "../../utils";

const ApprovePictures = ({ styles }) => {
  const { wrapper: wrapperStyles } = merge(defaultStyles, styles);
  const Wrapper = wrapperFactory(wrapperStyles);

  const approvedPicturesTitle = toUpperCase("approved images (0)");

  return (
    <Wrapper>
      <ApprovePicturesCarousel approvedPicturesTitle={approvedPicturesTitle} />
    </Wrapper>
  );
};

ApprovePictures.defaultProps = {
  styles: {},
};
ApprovePictures.propTypes = {
  styles: PropTypes.shape({
    wrapper: PropTypes.objectOf(PropTypes.string),
  }),
};
export default ApprovePictures;
