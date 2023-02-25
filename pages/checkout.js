import React from "react";
import Address_pop_up from "@/Components/address-pop-up/address_pop_up";
import { AiOutlineDelete } from "react-icons/ai";

const checkout = () => {
  return (
    <>
      <div className="checkout_section">
        <div className="checkout_content">
          <section className="payment_container">
            <section className="shopping_info">
              {/* <!-- Trigger/Open The Modal --> */}
              <div className="shipping_i_add_address">
                <div className="shipping_i_a_n_address">
                  <div className="shipping_i_a_n_a_info">
                    <p>
                      Address: <span>Badda, KA/123</span>
                    </p>
                    <p>
                      City: <span>Dhaka</span>
                    </p>
                    <p>
                      Email: <span>support@gadgetnphone.co</span>
                    </p>
                    <p>
                      Phone: <span>+0123456789</span>
                    </p>
                  </div>
                  <div>
                    <button className="circle_btn">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
                <div className="shipping_i_a_n_address">
                  <div className="shipping_i_a_n_a_info">
                    <p>
                      Address: <span>Badda, KA/123</span>
                    </p>
                    <p>
                      City: <span>Dhaka</span>
                    </p>
                    <p>
                      Email: <span>support@gadgetnphone.co</span>
                    </p>
                    <p>
                      Phone: <span>+0123456789</span>
                    </p>
                  </div>
                  <div>
                    <button className="circle_btn">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
                <div>
                  <Address_pop_up />
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default checkout;
