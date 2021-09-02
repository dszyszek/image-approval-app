import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import defaultStyles from "./styles";
import { merge, wrapperFactory } from "../../utils";
import { Image, Clickable } from "../../atoms";

const MainPicture = ({ styles, picture, onClick }) => {
  const { wrapper: wrapperStyles, image: imageStyles } = merge(
    defaultStyles,
    styles,
  );
  const Wrapper = wrapperFactory(wrapperStyles);
  const { src, alt } = picture;

  return (
    <Wrapper>
      <Clickable styles={imageStyles.wrapper} onClick={onClick}>
        <Image src={src} alt={alt} styles={imageStyles} />
      </Clickable>
    </Wrapper>
  );
};

MainPicture.defaultProps = {
  styles: {},
  picture: {},
  onClick: noop,
};
MainPicture.propTypes = {
  styles: PropTypes.shape({
    wrapper: PropTypes.objectOf(PropTypes.string),
    image: PropTypes.objectOf(PropTypes.string),
  }),
  picture: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default MainPicture;
