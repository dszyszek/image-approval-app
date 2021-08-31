import { Box } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";

import styled from "styled-components";

const defaultThemeConfig = {
  custom: {
    background: {
      darkBlue: "#3c4fde",
      main: "#f2f2f2",
    },
    font: {
      main: "#3c4fde",
    },
    border: {
      lightGrey: "#e1e1e1",
    },
  },
};

export const headerStylesFactory = (theme) => ({
  wrapper: {
    width: "100%",
    height: "8%",
    borderRadius: "8px 8px 0px 0px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.custom.background.main,
    borderBottom: `1px solid ${theme.custom.border.lightGrey}`,
  },
  text: {
    marginLeft: "10%",
    fontSize: "18px",
    color: theme.custom.font.main,
    // font: """,
  },
});

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
