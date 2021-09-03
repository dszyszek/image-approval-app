import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import defaultStyles from "./styles";
import { merge, wrapperFactory } from "../../utils";
import { Button, Text } from "../../atoms";

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
  const MainWrapper = wrapperFactory(wrapperStyles);
  const content = condition ? (
    <div style={{}}>
      <Button onClick={onReject} text="Reject" />
      <Button onClick={onApprove} text="Approve" />
    </div>
  ) : (
    <div>
      <Text>{isFalseMessage}</Text>
    </div>
  );

  return <MainWrapper>{content}</MainWrapper>;
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
