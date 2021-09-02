import React from "react";
import PropTypes from "prop-types";

import defaultStyles from "./styles";
import { merge } from "../../utils";

const ApprovePicturesBody = ({ styles }) => {
  const { wrapper: wrapperStyles } = merge(defaultStyles, styles);

  return <div style={wrapperStyles}>ApprovePicturesBody</div>;
};

ApprovePicturesBody.defaultProps = {
  styles: {},
};
ApprovePicturesBody.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
};

export default ApprovePicturesBody;
