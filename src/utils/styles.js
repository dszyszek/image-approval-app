import styled from "styled-components";
import Box from "@material-ui/core/Box";

export const wrapperFactory = (styles) =>
  styled(Box)({
    ...styles,
  });
