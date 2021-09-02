import React from "react";
import PropTypes from "prop-types";

import defaultStyles from "./styles";
import { merge } from "../../utils";
import { DEFAULT_ALT } from "./constants";
import defaultPicture from "./static/default.svg";

const Image = ({ src, alt, styles }) => {
  const { wrapper: wrapperStyles, img: imgStyles } = merge(
    defaultStyles,
    styles,
  );
  const finalSrc = src.length ? src : defaultPicture;

  return (
    <div style={wrapperStyles}>
      <img src={finalSrc} style={imgStyles} alt={alt} />
    </div>
  );
};

Image.defaultProps = {
  styles: {},
  src: "",
  alt: DEFAULT_ALT,
};
Image.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
