import Link from "next/link";
import SectionTitle from "../section-title/section-title";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Popular_brand extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="brand_section content_container">
        <SectionTitle
          title="Popular Brand"
          link="#"
          view_more="Browse All Brands"
        />
        <Slider {...settings} className="brand_content">
          <div className="px-2">
            <div className="brand_single_content ">
              <Link href="#">
                <img src="brand/apple.png"></img>
              </Link>
              <span>Apple</span>
            </div>
          </div>
          <div className="px-2">
            <div className="brand_single_content ">
              <Link href="#">
                <img src="brand/audi.png"></img>
              </Link>
              <span>Audi</span>
            </div>
          </div>
          <div className="px-2">
            <div className="brand_single_content ">
              <Link href="#">
                <img src="brand/dell.png"></img>
              </Link>
              <span>Dell</span>
            </div>
          </div>
          <div className="px-2">
            <div className="brand_single_content ">
              <Link href="#">
                <img src="brand/gucci.png"></img>
              </Link>
              <span>Gucci</span>
            </div>
          </div>
          <div className="px-2">
            <div className="brand_single_content ">
              <Link href="#">
                <img src="brand/heineken.png"></img>
              </Link>
              <span>Heineken</span>
            </div>
          </div>
          <div className="px-2">
            <div className="brand_single_content ">
              <Link href="#">
                <img src="brand/hermes.png"></img>
              </Link>
              <span>Hermes</span>
            </div>
          </div>
          <div className="px-2">
            <div className="brand_single_content ">
              <Link href="#">
                <img src="brand/hewlett.png"></img>
              </Link>
              <span>Hewlett Packard</span>
            </div>
          </div>
          <div className="px-2">
            <div className="brand_single_content ">
              <Link href="#">
                <img src="brand/hm.png"></img>
              </Link>
              <span>HM</span>
            </div>
          </div>
          <div className="px-2">
            <div className="brand_single_content ">
              <Link href="#">
                <img src="brand/honda.png"></img>
              </Link>
              <span>Honda</span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
