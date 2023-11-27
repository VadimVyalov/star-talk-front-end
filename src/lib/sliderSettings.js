import { SCREENS } from "./screens";

export const priceSlider = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  dots: true,
  infinite: true,
  arrows: false,
  className: "slider-price",
  responsive: [
    {
      breakpoint: SCREENS.d,
      settings: {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
        infinite: true,
      },
    },
    {
      breakpoint: SCREENS.t,
      settings: {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
        infinite: true,
      },
    },
  ],
};

export const teachersSlider = {
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  dots: true,
  infinite: true,
  arrows: false,
  className: "slider-teacher",
  responsive: [
    {
      breakpoint: SCREENS.d,
      settings: {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
        infinite: true,
      },
    },
    {
      breakpoint: SCREENS.t,
      settings: {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
        infinite: true,
      },
    },
  ],
};

export const rewiewsSlider = {
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  dots: true,
  infinite: true,
  arrows: false,
  className: "slider-rewiew",
  responsive: [
    {
      breakpoint: SCREENS.d,
      settings: {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
        infinite: true,
      },
    },
    {
      breakpoint: SCREENS.t,
      settings: {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
        infinite: true,
      },
    },
  ],
};
