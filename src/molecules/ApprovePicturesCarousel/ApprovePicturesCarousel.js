import React from "react";
import PropTypes from "prop-types";
import merge from "lodash/merge";

import defaultStyles, { wrapperFactory } from "./styles";
import { Text } from "../../atoms";
import { PicturesCarousel } from "..";

const ApprovePicturesCarousel = ({ styles, approvedPicturesTitle }) => {
  const { wrapper: wrapperStyles } = merge(defaultStyles, styles);
  const Wrapper = wrapperFactory(wrapperStyles);

  return (
    <Wrapper>
      <Text>{approvedPicturesTitle}</Text>
      <PicturesCarousel />
    </Wrapper>
  );
};

ApprovePicturesCarousel.defaultProps = {
  styles: {},
  approvedPicturesTitle: "",
};
ApprovePicturesCarousel.propTypes = {
  styles: PropTypes.shape({
    wrapper: PropTypes.objectOf(PropTypes.string),
  }),
  approvedPicturesTitle: PropTypes.string,
};

export default ApprovePicturesCarousel;
