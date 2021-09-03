import styled from "styled-components";
import { Button } from "@material-ui/core";

const defaultStyles = {
  fontSize: "10px",
  color: "black",
};

export const ButtonFactory = (styles) =>
  styled(Button)({
    ...styles,
  });

export default defaultStyles;
