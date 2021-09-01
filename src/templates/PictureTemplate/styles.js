import { Box } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import styled from "styled-components";

import { MARGIN_LEFT } from "./constants";
import { toPercentUnit } from "../../utils";

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
    spacing: {
      marginLeft: {
        main: toPercentUnit(MARGIN_LEFT),
      },
    },
  },
};

export const headerStylesFactory = (theme) => ({
  wrapper: {
    width: "100%",
    height: "8%",
    borderRadius: "8px 8px 0px 0px",
    display: "flex!important",
    justifyContent: "flex-start!important",
    alignItems: "center!important",
    backgroundColor: theme.custom.background.main,
    borderBottom: `1px solid ${theme.custom.border.lightGrey}`,
  },
  text: {
    marginLeft: `${theme.custom.spacing.marginLeft.main}!important`,
    fontSize: "15px!important",
    color: theme.custom.font.main,
    fontWeight: "bold!important",
  },
});

export const approvePicturesStylesFactory = (theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  carousel: {
    wrapper: {
      borderBottom: `1px solid ${theme.custom.border.lightGrey}`,
      // 100% - margin for each side
      width: toPercentUnit(100 - 2 * MARGIN_LEFT),
    },
    text: {
      wrapper: {
        margin: "30px 0 15px 0",
      },
      text: {
        fontSize: "15px!important",
        color: theme.custom.font.main,
        fontWeight: "bold!important",
      },
    },
    picturesCarousel: {},
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
  min-width: 380px;
`);

export default defaultThemeConfig;
