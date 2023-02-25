import SingleProduct from "@/Components/single-product/single-product";
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Product = () => {

  function handleActive(target) {
    if (document.querySelector('.'+target).classList.contains('hidden')) {
      document.querySelector('.'+target).classList = `${target} spsc_details`;
    } else {
      document.querySelector('.'+target).classList = `${target} hidden`;
    }
  }

  return (
    <>
      <div className="product_section">
        <div className="product_container content_container">
          <div className="product_side_categories">
            <div className="single_product_side_categories">
              <div
                className="single_psc_list flex justify-between items-center font-medium select-none cursor-pointer"
                onClick={(e) => handleActive('all_category')}
              >
                <p>All Categories</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-down"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              <div className="hidden all_category">
                <div className="flex justify-between items-center pt-1 pr-2 cursor-pointer">
                  <p>Appliances</p>
                  <span>10</span>
                </div>
                <div className="flex justify-between items-center pt-1 pr-2 cursor-pointer">
                  <p>Automobiles</p>
                  <span>15</span>
                </div>
                <div className="flex justify-between items-center pt-1 pr-2 cursor-pointer">
                  <p>Electronic</p>
                  <span>11</span>
                </div>
                <div className="flex justify-between items-center pt-1 pr-2 cursor-pointer">
                  <p>Fashion</p>
                  <span>4</span>
                </div>
                <div className="flex justify-between items-center pt-1 pr-2 cursor-pointer">
                  <p>Mobile</p>
                  <span>7</span>
                </div>
                <div className="flex justify-between items-center pt-1 pr-2 cursor-pointer">
                  <p>Software</p>
                  <span>5</span>
                </div>
                <div className="flex justify-between items-center pt-1 pr-2 cursor-pointer">
                  <p>Travel</p>
                  <span>9</span>
                </div>
              </div>
            </div>

            <div className="single_product_side_categories">
              <div
                className="single_psc_list flex justify-between items-center font-medium select-none cursor-pointer"
                onClick={() => handleActive('brand')}
              >
                <p>Brand</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-down"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              <div className="brand hidden">
                <div className=" cat_div flex justify-start items-center pt-2  cursor-pointer">
                  <input type="checkbox" id="UPS" className="spsc_input" />
                  <label htmlFor="UPS">UPS</label>
                </div>
                <div className="flex justify-start items-center pt-2  cursor-pointer">
                  <input type="checkbox" id="Toyota" className="spsc_input" />
                  <label htmlFor="Toyota">Toyota</label>
                </div>
                <div className="flex justify-start items-center pt-2 cursor-pointer">
                  <input type="checkbox" id="Sony" className="spsc_input" />
                  <label htmlFor="Sony">Sony</label>
                </div>
              </div>
            </div>

            <div className="single_product_side_categories">
              <div
                className=" single_psc_list flex justify-between items-center font-medium select-none cursor-pointer"
                onClick={() => handleActive('size')}
              >
                <p>Size</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-down"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>

              <div className="size hidden">
                <div className=" cat_div flex justify-start items-center pt-2  cursor-pointer">
                  <input type="checkbox" id="SM" className="spsc_input" />
                  <label htmlFor="SM">S</label>
                </div>
                <div className="flex justify-start items-center pt-2  cursor-pointer">
                  <input type="checkbox" id="MD" className="spsc_input" />
                  <label htmlFor="MD">M</label>
                </div>
                <div className="flex justify-start items-center pt-2 cursor-pointer">
                  <input type="checkbox" id="L" className="spsc_input" />
                  <label htmlFor="L">L</label>
                </div>
                <div className="flex justify-start items-center pt-2 cursor-pointer">
                  <input type="checkbox" id="X" className="spsc_input" />
                  <label htmlFor="X">X</label>
                </div>
              </div>
            </div>

            <div className="single_product_side_categories">
              <div
                className=" single_psc_list flex justify-between items-center font-medium select-none cursor-pointer"
                onClick={() => handleActive('color')}
              >
                <p>Color</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-down"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>

              <div className="hidden color">
                <div className=" cat_div flex justify-start items-center pt-2  cursor-pointer">
                  <input type="checkbox" id="red" className="spsc_input" />
                  <label htmlFor="red">Red</label>
                </div>
                <div className="flex justify-start items-center pt-2  cursor-pointer">
                  <input type="checkbox" id="black" className="spsc_input" />
                  <label htmlFor="black">Black</label>
                </div>
                <div className="flex justify-start items-center pt-2 cursor-pointer">
                  <input type="checkbox" id="White" className="spsc_input" />
                  <label htmlFor="White">White</label>
                </div>
                <div className="flex justify-start items-center pt-2 cursor-pointer">
                  <input type="checkbox" id="Gold" className="spsc_input" />
                  <label htmlFor="Gold">Gold</label>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="product_sort flex items-center justify-between">
              <h1 className="text-2xl">Sort By</h1>
              <select name="shorted" id="shorted">
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="Top Rated">Top Rated</option>
                <option value="Top Selling">Top Selling</option>
              </select>
            </div>
            <div className="all_product">
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
                Product_name="Apple iPhone 8 Plus, 64GB, Silver - Unlocked (Renewed Premium)"
                product_review={<AiFillStar />}
                product_review_empty={<AiOutlineStar />}
                product_rating="(12)"
              />
              <SingleProduct
                product_img="product/pc.png"
                product_price="12, 999"
                product_discount="15, 999"
                Product_name="Apple iPhone 8 Plus, 64GB, Silver - Unlocked (Renewed Premium)"
                product_review={<AiFillStar />}
                product_review_empty={<AiOutlineStar />}
                product_rating="(12)"
              />
              <SingleProduct
                product_img="product/laptop.png"
                product_price="12, 999"
                product_discount="15, 999"
                Product_name="Apple iPhone 8 Plus, 64GB, Silver - Unlocked (Renewed Premium)"
                product_review={<AiFillStar />}
                product_review_empty={<AiOutlineStar />}
                product_rating="(12)"
              />
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
                Product_name="Apple iPhone 8 Plus, 64GB, Silver - Unlocked (Renewed Premium)"
                product_review={<AiFillStar />}
                product_review_empty={<AiOutlineStar />}
                product_rating="(12)"
              />
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
                product_img="product/laptop.png"
                product_price="12, 999"
                product_discount="15, 999"
                Product_name="Apple iPhone 8 Plus, 64GB, Silver - Unlocked (Renewed Premium)"
                product_review={<AiFillStar />}
                product_review_empty={<AiOutlineStar />}
                product_rating="(12)"
              />
              <SingleProduct
                product_img="product/laptop.png"
                product_price="12, 999"
                product_discount="15, 999"
                Product_name="Apple iPhone 8 Plus, 64GB, Silver - Unlocked (Renewed Premium)"
                product_review={<AiFillStar />}
                product_review_empty={<AiOutlineStar />}
                product_rating="(12)"
              />
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
                product_img="product/pc.png"
                product_price="12, 999"
                product_discount="15, 999"
                Product_name="Apple iPhone 8 Plus, 64GB, Silver - Unlocked (Renewed Premium)"
                product_review={<AiFillStar />}
                product_review_empty={<AiOutlineStar />}
                product_rating="(12)"
              />
              <SingleProduct
                product_img="product/laptop.png"
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
                Product_name="Apple iPhone 8 Plus, 64GB, Silver - Unlocked (Renewed Premium)"
                product_review={<AiFillStar />}
                product_review_empty={<AiOutlineStar />}
                product_rating="(12)"
              />
            </div>
            <div className="product_show_more_btn">
              <button className="btn_1">Show More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
