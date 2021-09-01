import React from "react";
import PropTypes from "prop-types";

import defaultStyles, { wrapperFactory } from "./styles";
import { Text } from "../../atoms";
import { PicturesCarousel } from "..";
import { merge } from "../../utils";

const ApprovePicturesCarousel = ({ styles, approvedPicturesTitle }) => {
  const {
    wrapper: wrapperStyles,
    text: { wrapper: textWrapperStyles, text: textStyles },
    picturesCarousel: picturesCarouselStyles,
  } = merge(defaultStyles, styles);
  const Wrapper = wrapperFactory(wrapperStyles);
  const TextWrapper = wrapperFactory(textWrapperStyles);

  return (
    <Wrapper>
      <TextWrapper>
        <Text styles={textStyles}>{approvedPicturesTitle}</Text>
      </TextWrapper>
      <PicturesCarousel styles={picturesCarouselStyles} />
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
    text: PropTypes.objectOf(PropTypes.string),
    picturesCarousel: PropTypes.objectOf(PropTypes.string),
  }),
  approvedPicturesTitle: PropTypes.string,
};

export default ApprovePicturesCarousel;
