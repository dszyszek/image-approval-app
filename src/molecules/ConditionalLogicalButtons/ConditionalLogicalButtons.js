import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import defaultStyles from "./styles";
import { merge, wrapperFactory } from "../../utils";

const ConditionalLogicalButtons = ({
  styles,
  condition,
  onApprove,
  onReject,
  isFalseMessage,
}) => {
  const { wrapper: wrapperStyles, text: textStyles } = merge(
    defaultStyles,
    styles,
  );
  const Wrapper = wrapperFactory(wrapperStyles);
  const content = condition ? (
    <div>
      <button type="button" onClick={onReject}>
        Reject
      </button>
      <button type="button" onClick={onApprove}>
        Approve
      </button>
    </div>
  ) : (
    <div>{isFalseMessage}</div>
  );

  return <Wrapper>{content}</Wrapper>;
};

ConditionalLogicalButtons.defaultProps = {
  styles: {},
  condition: false,
  onApprove: noop,
  onReject: noop,
  isFalseMessage: "",
};

ConditionalLogicalButtons.propTypes = {
  styles: PropTypes.shape({}),
  condition: PropTypes.bool,
  onApprove: PropTypes.func,
  onReject: PropTypes.func,
  isFalseMessage: PropTypes.string,
};

export default ConditionalLogicalButtons;
