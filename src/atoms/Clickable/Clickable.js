/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/interactive-supports-focus: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import { stylesTemplate } from "./styles";

const Clickable = ({ styles: passedStyles, children, onClick }) => {
  const styles = stylesTemplate(passedStyles);
  return (
    <div style={styles} onClick={onClick}>
      {children}
    </div>
  );
};

Clickable.defaultProps = {
  styles: {},
  children: [],
  onClick: noop,
};

Clickable.propTypes = {
  styles: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

export default Clickable;
