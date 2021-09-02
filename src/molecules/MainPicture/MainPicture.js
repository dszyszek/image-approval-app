import React from "react";
import PropTypes from "prop-types";

import defaultStyles from "./styles";
import { merge, wrapperFactory } from "../../utils";

const MainPicture = ({ styles }) => {
  const { wrapper: wrapperStyles } = merge(defaultStyles, styles);
  const Wrapper = wrapperFactory(wrapperStyles);

  return <Wrapper>MainPicture</Wrapper>;
};

MainPicture.defaultProps = {
  styles: {},
};
MainPicture.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
};

export default MainPicture;
