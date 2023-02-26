import React from "react";
import Address_pop_up from "@/Components/address-pop-up/address_pop_up";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import CartTitle from "@/Components/cart-title/cart-title";

const checkout = () => {
  return (
    <>
      <div className="checkout_section">
        <div className="checkout_content">
        <CartTitle />
          <section className="payment_container">
            <section className="shopping_info grid gap-3">
              {/* <!-- Trigger/Open The Modal --> */}
              <div className="shipping_i_add_address">
                <div className="shipping_i_a_n_address rounded ">
                  <div className="shipping_i_a_n_a_info">
                    <p>
                      Name: <span>SH Sazib</span>
                    </p>
                    <p>
                      Email: <span>support@gadgetnphone.co</span>
                    </p>
                    <p>
                      Phone: <span>+018123456789</span>
                    </p>
                    <p>
                      City: <span>Dhaka</span>
                    </p>
                    <p>
                      State: <span>Dhaka</span>
                    </p>
                    <p>
                      Country: <span>Bangladesh</span>
                    </p>
                    <p>
                      Postal Code: <span>123456</span>
                    </p>
                    <p>
                      Address: <span>Badda, KA/123</span>
                    </p>
                  </div>
                  <div>
                    <button className="circle_btn">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
                <div className="shipping_i_a_n_address rounded ">
                  <div className="shipping_i_a_n_a_info">
                    <p>
                      Name: <span>SH Sazib</span>
                    </p>
                    <p>
                      Email: <span>support@gadgetnphone.co</span>
                    </p>
                    <p>
                      Phone: <span>+018123456789</span>
                    </p>
                    <p>
                      City: <span>Dhaka</span>
                    </p>
                    <p>
                      State: <span>Dhaka</span>
                    </p>
                    <p>
                      Country: <span>Bangladesh</span>
                    </p>
                    <p>
                      Postal Code: <span>123456</span>
                    </p>
                    <p>
                      Address: <span>Badda, KA/123</span>
                    </p>
                  </div>
                  <div>
                    <button className="circle_btn">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
                <div>
                  <Address_pop_up />
                </div>
            </section>

            <div className="">
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
                  <button className="btn_1 w-full py-2">
                    Proceed To Payment
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default checkout;
