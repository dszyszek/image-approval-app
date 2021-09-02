import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import defaultThemeConfig, {
  MainBox,
  PictureTemplateWrapper,
  headerStylesFactory,
  approvePicturesStylesFactory,
} from "./styles";
import { Header } from "../../molecules";
import { toUpperCase, merge } from "../../utils";
import { ApprovePictures } from "../../organisms";
import { DEFAULT_HEADER_TEXT } from "./constants";
import "./main.scss";

const PictureTemplate = ({
  themeConfig,
  data: { headerText, carouselImages },
}) => {
  const finalTheme = merge(defaultThemeConfig, themeConfig);

  const theme = createTheme(finalTheme);
  const headerStyles = headerStylesFactory(theme);
  const approvePicturesStyles = approvePicturesStylesFactory(theme);

  const finalHeaderText = headerText || DEFAULT_HEADER_TEXT;
  const finalheaderTextTransformed = toUpperCase(finalHeaderText);

  return (
    <ThemeProvider theme={theme}>
      <MainBox xs={12}>
        <PictureTemplateWrapper>
          <Header
            styles={headerStyles}
            headerText={finalheaderTextTransformed}
          />
          <ApprovePictures
            styles={approvePicturesStyles}
            // title="approved images (0)"
            carouselImages={carouselImages}
          />
        </PictureTemplateWrapper>
      </MainBox>
    </ThemeProvider>
  );
};

PictureTemplate.defaultProps = {
  themeConfig: {},
  data: {
    headerText: DEFAULT_HEADER_TEXT,
    carouselImages: [],
  },
};

PictureTemplate.propTypes = {
  themeConfig: PropTypes.objectOf(PropTypes.object),
  data: PropTypes.shape({
    carouselImages: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    headerText: PropTypes.string,
  }),
};

export default PictureTemplate;
