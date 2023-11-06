import React from "react";
import Slider from "react-slick";
import CardTypeRepaire from "../CardtypeRepaire/CardTypeRepaire";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SectionRepairPrices() {
  const redecorating = {
    Демонтаж: ["Демонтаж старых покрытий", "Демонтаж старой электрики"],
    "Черновые работы": ["Грунтовка стен и пола", "Шпатлевка и штукатурка стен"],
    "Чистовые работы": ["Lorem ipsum dolor", "Lorem ipsum dolor"]
  };

  const majorRepair = {
    Демонтаж: ["Демонтаж старых покрытий", "Демонтаж старой электрики"],
    "Черновые работы": ["Грунтовка стен и пола", "Шпатлевка и штукатурка стен"],
    "Чистовые работы": ["Lorem ipsum dolor", "Lorem ipsum dolor"]
  };

  const turnkeyRenovation = {
    Демонтаж: ["Демонтаж старых покрытий", "Демонтаж старой электрики"],
    "Черновые работы": ["Грунтовка стен и пола", "Шпатлевка и штукатурка стен"],
    "Чистовые работы": ["Lorem ipsum dolor", "Lorem ipsum dolor"]
  };

  const designerRenovation = {
    Демонтаж: ["Демонтаж старых покрытий", "Демонтаж старой электрики"],
    "Черновые работы": ["Грунтовка стен и пола", "Шпатлевка и штукатурка стен"],
    "Чистовые работы": ["Lorem ipsum dolor", "Lorem ipsum dolor"]
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 }
      },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };
  return (
    <Slider {...settings}>
      <CardTypeRepaire objJob={redecorating} />
      <CardTypeRepaire objJob={majorRepair} />
      <CardTypeRepaire objJob={turnkeyRenovation} />
      <CardTypeRepaire objJob={designerRenovation} />
    </Slider>
  );
}
