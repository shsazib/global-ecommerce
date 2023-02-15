import Link from "next/link";
import SectionTitle from "../section-title/section-title";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Top_cat_this_month extends Component {
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
            slidesToShow: 6,
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
      <div className="top_cat_this_month_container">
        <div className="top_cat_this_month_section">
          <h1 className="top_cat_this_month_h1">
            Top Categories Of This Month
          </h1>
          <Slider {...settings} className="top_cat_this_month">
            <div className="px-2">
              <Link href="#" className="single_p_categories">
                <img src="categories/travel.png" alt="img"></img>
                <p>Fashion</p>
              </Link>
            </div>
            <div className="px-2">
              <Link href="#" className="single_p_categories">
                <img src="categories/home.png" alt="img"></img>
                <p>Home</p>
              </Link>
            </div>
            <div className="px-2">
              <Link href="#" className="single_p_categories">
                <img src="categories/toys.png" alt="img"></img>
                <p>Mobile</p>
              </Link>
            </div>
            <div className="px-2">
              <Link href="#" className="single_p_categories">
                <img src="categories/appliances.png" alt="img"></img>
                <p>Appliances</p>
              </Link>
            </div>
            <div className="px-2">
              <Link href="#" className="single_p_categories">
                <img src="categories/grocery.png" alt="img"></img>
                <p>Software</p>
              </Link>
            </div>
            <div className="px-2">
              <Link href="#" className="single_p_categories">
                <img src="empty.png" alt="img"></img>
                <p>Men's Bottom Wear</p>
              </Link>
            </div>
            <div className="px-2">
              <Link href="#" className="single_p_categories">
                <img src="empty.png" alt="img"></img>
                <p>Washing Machines</p>
              </Link>
            </div>
            
          </Slider>
        </div>
      </div>
    );
  }
}
