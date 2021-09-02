import React from "react";
import PropTypes from "prop-types";

import defaultStyles from "./styles";
import { merge } from "../../utils";

const MainPicture = ({ styles }) => {
  const { wrapper: wrapperStyles } = merge(defaultStyles, styles);

  return <div style={wrapperStyles}>MainPicture</div>;
};

MainPicture.defaultProps = {
  styles: {},
};
MainPicture.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
};

export default MainPicture;
