import styled from "styled-components";
import { Box } from "@material-ui/core";

const defaultStyles = {
  wrapper: {
    width: "100%",
    height: "85%",
    border: "1px solid green",
  },
};

export const wrapperFactory = (styles) =>
  styled(Box)({
    ...styles,
  });

export default defaultStyles;
