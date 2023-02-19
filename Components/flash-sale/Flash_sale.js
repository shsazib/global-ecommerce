import Link from "next/link";
import SectionTitle from "../section-title/section-title";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Single_flash_sale from "../single-flash-sale/Single_flash_sale";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";




export default class Flash_sale extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
      };
      return (
        <div className="flash_sale_section content_container">
          <SectionTitle title="Flash Sale" link="#" view_more="More Products" />
          <Slider {...settings} className="flash_sale grid gap-3">
            <Single_flash_sale
            product_img = "product/air buds.png"
            product_discount_price = "15, 000"
            product_price = "12, 000"
            product_name = "SIMPLIHOME Malden Swivel Adjustable Executive Computer Office Chair in Grey Woven Fabric, for the Office and Study, Contemporary"
            product_review = {<AiFillStar />}
            product_review_empty = {<AiOutlineStar />}
            product_rating = "11"
            />
            <Single_flash_sale
            product_img = "product/air buds.png"
            product_discount_price = "15, 000"
            product_price = "12, 000"
            product_name = "SIMPLIHOME Malden Swivel Adjustable Executive Computer Office Chair in Grey Woven Fabric, for the Office and Study, Contemporary"
            product_review = {<AiFillStar />}
            product_review_empty = {<AiOutlineStar />}
            product_rating = "11"
            />
            <Single_flash_sale
            product_img = "product/air buds.png"
            product_discount_price = "15, 000"
            product_price = "12, 000"
            product_name = "SIMPLIHOME Malden Swivel Adjustable Executive Computer Office Chair in Grey Woven Fabric, for the Office and Study, Contemporary"
            product_review = {<AiFillStar />}
            product_review_empty = {<AiOutlineStar />}
            product_rating = "11"
            />
            <Single_flash_sale
            product_img = "product/air buds.png"
            product_discount_price = "15, 000"
            product_price = "12, 000"
            product_name = "SIMPLIHOME Malden Swivel Adjustable Executive Computer Office Chair in Grey Woven Fabric, for the Office and Study, Contemporary"
            product_review = {<AiFillStar />}
            product_review_empty = {<AiOutlineStar />}
            product_rating = "11"
            />
            <Single_flash_sale
            product_img = "product/air buds.png"
            product_discount_price = "15, 000"
            product_price = "12, 000"
            product_name = "SIMPLIHOME Malden Swivel Adjustable Executive Computer Office Chair in Grey Woven Fabric, for the Office and Study, Contemporary"
            product_review = {<AiFillStar />}
            product_review_empty = {<AiOutlineStar />}
            product_rating = "11"
            />
            <Single_flash_sale
            product_img = "product/air buds.png"
            product_discount_price = "15, 000"
            product_price = "12, 000"
            product_name = "SIMPLIHOME Malden Swivel Adjustable Executive Computer Office Chair in Grey Woven Fabric, for the Office and Study, Contemporary"
            product_review = {<AiFillStar />}
            product_review_empty = {<AiOutlineStar />}
            product_rating = "11"
            />
          </Slider>
        </div>
      );
    }
  }
  
