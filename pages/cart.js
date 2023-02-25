import React from "react";
import Cart_title from "@/Components/cart-title/cart-title";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const cart = () => {
  return (
    <>
      <div className="content_container mb-[40px]">
        <Cart_title />
        <div className="cart_section">
          <div className="cart_product_container">
            <div className="cart_product">
              <div className="cart_product_content cart_product_title gap-4">
                <p>Product</p>
                <p>Unit Price</p>
                <p>Quantity</p>
                <p>Total Price</p>
                <p>Action</p>
              </div>
              <div className="cart_product_content gap-4 ">
                <Link
                  href="#"
                  className="flex items-center justify-start gap-4"
                >
                  <img
                    src="product/pc.png"
                    alt="product img"
                    className="w-[60px]"
                  ></img>
                  <p className="flash_product_name">
                    2021 Apple iMac (24-inch, Apple M1 chip with 8‑core CPU and
                    7‑core GPU, 8GB RAM, 256GB) - Silver
                  </p>
                </Link>
                <div className="grid items-center">
                  <div>
                    <p>$ 12,000</p>
                    <del className="text-[12px]">$ 12,000</del>
                  </div>
                </div>
                <div className="cart_quantity flex items-center justify-center">
                  <button>{/* <AiOutlinePlus /> */}-</button>
                  <span>0</span>
                  <button>{/* <AiOutlineMinus /> */}+</button>
                </div>
                <div className="grid items-center">
                  <div>
                    <p>$ 12,000</p>
                    <del className="text-[12px]">$ 12,000</del>
                  </div>
                </div>
                <div className="grid items-center text-[16px] cursor-pointer ">
                  <span className="hover:text-[var(--theme)]">Delete</span>
                </div>
              </div>
              <div className="cart_product_content gap-4 ">
                <Link
                  href="#"
                  className="flex items-center justify-start gap-4"
                >
                  <img
                    src="product/pc.png"
                    alt="product img"
                    className="w-[60px]"
                  ></img>
                  <p className="flash_product_name">
                    2021 Apple iMac (24-inch, Apple M1 chip with 8‑core CPU and
                    7‑core GPU, 8GB RAM, 256GB) - Silver
                  </p>
                </Link>
                <div className="grid items-center">
                  <div>
                    <p>$ 12,000</p>
                    <del className="text-[12px]">$ 12,000</del>
                  </div>
                </div>
                <div className="cart_quantity flex items-center justify-center">
                  <button>{/* <AiOutlinePlus /> */}-</button>
                  <span>0</span>
                  <button>{/* <AiOutlineMinus /> */}+</button>
                </div>
                <div className="grid items-center">
                  <div>
                    <p>$ 12,000</p>
                    <del className="text-[12px]">$ 12,000</del>
                  </div>
                </div>
                <div className="grid items-center text-[16px] cursor-pointer ">
                  <span className="hover:text-[var(--theme)]">Delete</span>
                </div>
              </div>
            </div>
          </div>
          <div className="cart_price_content">
            <h2 className="text-[20px]">Price Details</h2>
            <div className="cart_price">
              <div className="cart_price_name flex justify-between py-2">
                <p>Subtotal</p>
                <span>$ 124,000.00</span>
              </div>
              <div className="cart_price_name flex justify-between py-2">
                <p>Tax</p>
                <span>$ 0.00</span>
              </div>
              <div className="cart_price_name flex justify-between py-2">
                <p>Discount</p>
                <span>$ 12,00.00</span>
              </div>
              <div className="cart_price_name flex justify-between py-2">
                <p>Shipping Cost</p>
                <span>$ 0.00</span>
              </div>
              <div className="cart_price_name flex justify-between py-2">
                <p>Coupon Discount</p>
                <span>$ 0.00</span>
              </div>
            </div>
            <div className="cart_total_price my-2 py-3 flex items-center justify-between text-[18px]">
              <h1>Total</h1>
              <span>$ 144, 000.00</span>
            </div>
            <Link href="/checkout">
              <button className="btn_1 w-full py-2">Proceed To Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default cart;
