import React from "react";
import Link from "next/link";
import { FiRefreshCw, FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const SingleProduct = ({
  product_img,
  Product_name,
  product_discount = null,
  product_price,
  product_review = null,
  product_review_empty = null,
  product_rating = null,
}) => {
  return (
    <>
      <div className="px-2">
        <div className="single_product rounded">
          <div className="product_img">
            <Link href="#">
              <img src={product_img} alt="product img"></img>
            </Link>
          </div>
          <div className="product_content">
            <div className="product_price flex items-center gap-2">
              <p>{product_price}</p>
              <del>{product_discount}</del>
            </div>
            <Link href="#">
              <p className="product_name">{Product_name}</p>
            </Link>
            <div className="product_review flex items-center">
              <div className="product_review_icon flex">
                {product_review}
                {product_review}
                {product_review}
                {product_review}
                {product_review_empty}
              </div>
              <p className="product_rating">{product_rating}</p>
            </div>
          </div>
          <div className="product_add">
            <AiOutlineShoppingCart className="product_add_icon" />
            <FiRefreshCw className="product_add_icon" />
            <FiHeart className="product_add_icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
