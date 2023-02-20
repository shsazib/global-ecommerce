import Link from "next/link";
import SectionTitle from "../section-title/section-title";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRightShort } from "react-icons/bs";

export default class PopularCategories extends Component {
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
      <div className="popular_categories_section content_container">
        <SectionTitle
          title="Popular Categories"
          link="#"
          view_more="Browse All Categories"
          icon = {<BsArrowRightShort />}
        />
        <Slider {...settings} className="popular_categories">
          <div className="px-2">
            <Link href="#" className="single_p_categories">
              <img src="categories/fashion.png" alt="img"></img>
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
              <img src="categories/mobile.png" alt="img"></img>
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
              <img src="categories/software.png" alt="img"></img>
              <p>Software</p>
            </Link>
          </div>
          <div className="px-2">
            <Link href="#" className="single_p_categories">
              <img src="empty_categories_bg.png" alt="img"></img>
              <p>Automobiles</p>
            </Link>
          </div>
          <div className="px-2">
            <Link href="#" className="single_p_categories">
              <img src="empty_categories_bg.png" alt="img"></img>
              <p>Automobiles</p>
            </Link>
          </div>
          <div className="px-2">
            <Link href="#" className="single_p_categories">
              <img src="empty_categories_bg.png" alt="img"></img>
              <p>Automobiles</p>
            </Link>
          </div>
          <div className="px-2">
            <Link href="#" className="single_p_categories">
              <img src="empty_categories_bg.png" alt="img"></img>
              <p>Automobiles</p>
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}
