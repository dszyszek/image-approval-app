import React from "react";
import PropTypes from "prop-types";

import defaultStyles from "./styles";
import { merge } from "../../utils";

const PicturesCarousel = ({ styles }) => {
  const finalStyles = merge(defaultStyles, styles);

  return <div>PicturesCarousel</div>;
};

PicturesCarousel.defaultProps = {
  styles: {},
};
PicturesCarousel.propTypes = {
  styles: PropTypes.objectOf(PropTypes.object),
};

export default PicturesCarousel;
