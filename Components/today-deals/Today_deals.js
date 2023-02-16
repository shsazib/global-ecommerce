import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import SingleProduct from "../single-product/single-product";
import SectionTitle from "../section-title/section-title";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Today_deals extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div className="today_deals_section content_container">
        <SectionTitle title="Today Deals" link="#" view_more="More Products" />
        <Slider {...settings} className="today_deals_content">
          <SingleProduct
            product_img="product/iphone 8.png"
            product_price="12, 999"
            product_discount="15, 999"
            Product_name="Apple iPhone 8 Plus, 64GB, Silver - Unlocked (Renewed Premium)"
            product_review={<AiFillStar />}
            product_review_empty={<AiOutlineStar />}
            product_rating="(12)"
          />
          <SingleProduct
            product_img="product/watch.png"
            product_price="12, 999"
            product_discount="15, 999"
            Product_name="Garmin Venu 2S, Smaller-sized GPS Smartwatch with Advanced Health Monitoring and Fitness Features, Rose Gold Bezel with White Case and Silicone Band"
            product_review={<AiFillStar />}
            product_review_empty={<AiOutlineStar />}
            product_rating="(12)"
          />
          <SingleProduct
            product_img="product/pc.png"
            product_price="12, 999"
            product_discount="15, 999"
            Product_name="HP 24-inch All-in-One Desktop Computer, AMD Athlon Silver 3050U Processor, 8 GB RAM, 256 GB SSD, Windows 10 Home (24-dd0010, White)"
            product_review={<AiFillStar />}
            product_review_empty={<AiOutlineStar />}
            product_rating="(12)"
          />
          <SingleProduct
            product_img="product/air buds.png"
            product_price="12, 999"
            product_discount="15, 999"
            Product_name="Garmin Venu 2S, Smaller-sized GPS Smartwatch with Advanced Health Monitoring and Fitness Features, Rose Gold Bezel with White Case and Silicone Band"
            product_review={<AiFillStar />}
            product_review_empty={<AiOutlineStar />}
            product_rating="(12)"
          />
          <SingleProduct
            product_img="product/laptop.png"
            product_price="12, 999"
            product_discount="15, 999"
            Product_name="HP 24-inch All-in-One Desktop Computer, AMD Athlon Silver 3050U Processor, 8 GB RAM, 256 GB SSD, Windows 10 Home (24-dd0010, White)"
            product_review={<AiFillStar />}
            product_review_empty={<AiOutlineStar />}
            product_rating="(12)"
          />
          <SingleProduct
            product_img="product/iphone 12.png"
            product_price="12, 999"
            product_discount="15, 999"
            Product_name="Apple iPhone 12 Plus, 64GB, Silver - Unlocked (Renewed Premium)"
            product_review={<AiFillStar />}
            product_review_empty={<AiOutlineStar />}
            product_rating="(12)"
          />
          <SingleProduct
            product_img="product/pc.png"
            product_price="12, 999"
            product_discount="15, 999"
            Product_name="HP 24-inch All-in-One Desktop Computer, AMD Athlon Silver 3050U Processor, 8 GB RAM, 256 GB SSD, Windows 10 Home (24-dd0010, White)"
            product_review={<AiFillStar />}
            product_review_empty={<AiOutlineStar />}
            product_rating="(12)"
          />
          <SingleProduct
            product_img="product/watch.png"
            product_price="12, 999"
            product_discount="15, 999"
            Product_name="Garmin Venu 2S, Smaller-sized GPS Smartwatch with Advanced Health Monitoring and Fitness Features, Rose Gold Bezel with White Case and Silicone Band"
            product_review={<AiFillStar />}
            product_review_empty={<AiOutlineStar />}
            product_rating="(12)"
          />
        </Slider>
      </div>
    );
  }
}
