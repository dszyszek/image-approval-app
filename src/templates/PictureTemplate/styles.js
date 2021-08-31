import { Box } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";

import styled from "styled-components";

const defaultThemeConfig = {
  custom: {
    background: {
      darkBlue: "#3c4fde",
      main: "#f2f2f2",
    },
    fonts: {},
  },
};

export const MainBox = withTheme(styled(Box)`
  background-color: ${({ theme }) => theme.custom.background.darkBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`);

export const PictureTemplateWrapper = withTheme(styled(Box)`
  width: 25%;
  height: 85%;
  background-color: ${({ theme }) => theme.custom.background.main};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`);

export default defaultThemeConfig;
