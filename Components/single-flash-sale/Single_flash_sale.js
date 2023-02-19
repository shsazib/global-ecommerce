import Link from "next/link";
import React from "react";
// import { BsFillSuitHeartFill } from "react-icons/bs";
// import { SlRefresh } from "react-icons/sl";

const heartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="flash_icon"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    stroke-width="1"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
  </svg>
);
const compare = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="flash_icon"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    stroke-width="1"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
  </svg>
);
const addCart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="flash_add_cart flash_icon"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    stroke-width="1"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
    <path d="M17 17h-11v-14h-2"></path>
    <path d="M6 5l14 1l-1 7h-13"></path>
  </svg>
);

const Single_flash_sale = ({
  product_img,
  product_discount_price = null,
  product_price,
  product_name,
  product_review = null,
  product_review_empty = null,
  product_rating = null,
}) => {
  return (
    <>
      <div className="single_flash_sale_section px-2">
        <div className="single_flash_sale">
          <Link href="#">
            <img src={product_img} alt="product img"></img>
          </Link>
          <div className="flash_product_content">
            <div className="flex gap-2 items-center flash_price ">
              <del>{product_discount_price}</del>
              <p>{product_price}</p>
            </div>
            <Link href="#" className="flash_product_name">
              <p>{product_name}</p>
            </Link>
            <div className="flex items-center">
              <div className="flash_review flex items-center">
                {product_review}
                {product_review}
                {product_review_empty}
                {product_review_empty}
                {product_review_empty}
              </div>
              ({product_rating})
            </div>
            <div className=" flex gap-2 items-center justify-start">
              <button className="btn_2">ADD TO CART</button>
              {addCart}
              {heartIcon}
              {compare}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single_flash_sale;
