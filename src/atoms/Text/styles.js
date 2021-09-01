import styled from "styled-components";
import { Typography } from "@material-ui/core";

const defaultStyles = {
  fontSize: "10px",
  color: "black",
};

export const TextFactory = (styles) =>
  styled(Typography)({
    ...styles,
  });

export default defaultStyles;
