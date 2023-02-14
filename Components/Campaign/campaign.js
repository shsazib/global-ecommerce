import Link from "next/link";
import SectionTitle from "../section-title/section-title";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Campaign extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="campaign_section content_container">
        <SectionTitle title="Campaign" link="#" view_more="More Campaign" />
        <Slider {...settings} className="campaign_content">
          <div className="px-2">
            <div className="campaign_single_content ">
              <Link href="#">
                <img src="offer/exclusive offer.png"></img>
              </Link>
              <span>27 Mar 2022 - 30 Apr 2025</span>
              <Link href="#">Exclusive Offer</Link>
              <p>Exclusive</p>
              <button className="btn_1">Get Discount</button>
            </div>
          </div>
          <div className="px-2">
            <div className="campaign_single_content">
              <Link href="#">
                <img src="offer/deals made especially for you.png"></img>
              </Link>
              <span>21 Mar 2006 - 10 Apr 2010</span>
              <Link href="#">Deals made especially for you</Link>
              <p>Offer</p>
              <button className="btn_1">Get Discount</button>
            </div>
          </div>
          <div className="px-2">
            <div className="campaign_single_content">
              <Link href="#">
                <img src="offer/the biggest sale.png"></img>
              </Link>
              <span>20 Mar 2012 - 25 Apr 2022</span>
              <Link href="#">The biggest sale</Link>
              <p>The biggest sale</p>
              <button className="btn_1">Get Discount</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
