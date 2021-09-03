import React from "react";
import PropTypes from "prop-types";
import isFunction from "lodash/isFunction";

import defaultStyles from "./styles";
import { merge, wrapperFactory } from "../../utils";

const Footer = ({ styles, renderContent }) => {
  const { wrapper: wrapperStyles } = merge(defaultStyles, styles);
  const FooterWrapper = wrapperFactory(wrapperStyles);
  const content = isFunction(renderContent) ? renderContent() : null;

  return <FooterWrapper>{content}</FooterWrapper>;
};

Footer.defaultProps = {
  styles: {},
  renderContent: undefined,
};

Footer.propTypes = {
  styles: PropTypes.shape({
    wrapper: PropTypes.objectOf(PropTypes.string),
  }),
  renderContent: PropTypes.func,
};

export default Footer;
