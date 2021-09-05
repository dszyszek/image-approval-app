import { Box } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import styled from "styled-components";

import {
  APPROVE_PICTURES_PADDING,
  HEADER_HEIGHT,
  APPROVE_PICTURES_HEIGHT,
  FOOTER_HEIGHT,
} from "./constants";
import { toPercentUnit } from "../../utils";

const defaultThemeConfig = {
  custom: {
    background: {
      darkBlue: "#3c4fde",
      main: "#f2f2f2",
      dark: "#4a4a4a",
    },
    font: {
      main: "#3c4fde",
      grey: "#9c9c9c",
    },
    border: {
      lightGrey: "#e1e1e1",
    },
    spacing: {
      marginLeft: {
        main: toPercentUnit(APPROVE_PICTURES_PADDING),
      },
    },
  },
};

export const headerStylesFactory = (theme) => ({
  wrapper: {
    width: "100%",
    height: toPercentUnit(HEADER_HEIGHT),
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
    paddingLeft: toPercentUnit(APPROVE_PICTURES_PADDING),
    paddingRight: toPercentUnit(APPROVE_PICTURES_PADDING),
    height: toPercentUnit(APPROVE_PICTURES_HEIGHT),
  },
  carousel: {
    wrapper: {
      borderBottom: `1px solid ${theme.custom.border.lightGrey}`,
      width: "100%",
      flex: 0.75,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    text: {
      wrapper: {
        margin: "20px 0 15px 0",
        width: "100%",
      },
      text: {
        fontSize: "15px!important",
        color: theme.custom.font.main,
        fontWeight: "bold!important",
      },
    },
    picturesCarousel: {},
    picturesCarouselWrapper: {
      width: "100%",
      height: "40%",
      display: "flex",
      alignItems: "center",
    },
  },
  mainPicture: {
    wrapper: {
      flex: 2.4,
      padding: "6% 0",
      borderBottom: `1px solid ${theme.custom.border.lightGrey}`,
      maxHeight: "430px",
    },
    image: {
      wrapper: {
        width: "100%",
        backgroundColor: "#e6eaf0",
        border: "1px solid #d5d9e0",
        borderRadius: "8px",
      },
      img: {
        width: "100%",
        borderRadius: "8px",
      },
    },
  },
  conditionalLogicalButtons: {
    wrapper: {
      flex: 0.3,
      marginTop: "6%",
    },
    buttonsWrapper: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    button: {
      reject: {
        backgroundColor: `${theme.custom.background.dark}!important`,
      },
      approve: {
        backgroundColor: `${theme.custom.background.darkBlue}!important`,
      },
    },
    text: {
      color: theme.custom.font.grey,
    },
    messageWrapper: {},
  },
});

export const footerStylesFactory = (theme) => ({
  wrapper: {
    width: "100%",
    height: toPercentUnit(FOOTER_HEIGHT),
    borderRadius: "0 0 8px 8px",
    backgroundColor: theme.custom.background.main,
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
  height: ${toPercentUnit(APPROVE_PICTURES_HEIGHT)};
  background-color: ${({ theme }) => theme.custom.background.main};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  min-width: 380px;
`);

export default defaultThemeConfig;
