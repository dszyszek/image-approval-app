import React from "react";
import PropTypes from "prop-types";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import "./overrides.scss";

import defaultStyles from "./styles";
import { merge } from "../../utils";
import { DEFAULT_SLIDER_OPTIONS } from "./constants";

const PicturesCarousel = ({ styles, items, sliderOptions }) => {
  const { wrapper: wrapperStyles } = merge(defaultStyles, styles);
  const finalSliderOptions = merge(DEFAULT_SLIDER_OPTIONS, sliderOptions);

  return (
    <Splide options={finalSliderOptions}>
      {items.map(({ url, alt }) => (
        <SplideSlide key={alt}>
          <img src={url} alt={alt} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

PicturesCarousel.defaultProps = {
  styles: {},
  items: [],
  sliderOptions: {},
};
PicturesCarousel.propTypes = {
  styles: PropTypes.objectOf(PropTypes.object),
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  sliderOptions: PropTypes.objectOf(PropTypes.object),
};

export default PicturesCarousel;
