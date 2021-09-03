import styled from "styled-components";
import Button from "@material-ui/core/Button";

const defaultStyles = {
  fontSize: "10px",
  background: "#ff7878!important",
  borderRadius: "10px!important",
};

export const buttonFactory = (styles) =>
  styled(Button)({
    ...styles,
  });

export default defaultStyles;
