import styled from "styled-components";
import { Box } from "@material-ui/core";

const defaultStyles = {
  wrapper: {
    width: "100%",
    height: "85%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
};

export const wrapperFactory = (styles) =>
  styled(Box)({
    ...styles,
  });

export default defaultStyles;
